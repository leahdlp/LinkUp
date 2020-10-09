import React from 'react';
import IndexListItem from './index_list_item';

class IndexList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            results: [],
            keywords: []
        }

        if (this.props.keyword) {
            this.keyword = this.props.keyword.toLowerCase()
        } 

        this.includesKeyword = this.includesKeyword.bind(this);
        this.filterEvents = this.filterEvents.bind(this);
        this.filterGroups = this.filterGroups.bind(this);
        this.filterOutSubcategories = this.filterOutSubcategories.bind(this);
        this.addAll = this.addAll.bind(this);
        this.filterOut = this.filterOut.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.newSearch = this.newSearch.bind(this);
    }

    componentDidMount() {
        console.log(this.props.keyword)

        if (!this.props.keyword) {
            this.props.fetchEvents()
                .then(() => { 
                    this.props.fetchGroups()
                        .then(() => { 
                            this.props.fetchSubcategories()
                                .then(() => this.filterOut('none'))
                        })
                });
        } else {
            this.props.fetchEvents()
                .then(() => this.filterOut('events'))
            this.props.fetchGroups()
                .then(() => this.filterOut('groups'))
            this.props.fetchSubcategories()
                .then(() => this.filterOut('subcats'))
        }
    }

    includesKeyword(name) {
        return name.toLowerCase().split(' ').includes(this.props.keyword);
    }

    filterEvents() {
        let results = this.state.results;
        let events = [];

        Object.values(this.props.events).forEach(event => {
            if (this.includesKeyword(event.name)) {
                events.push(event);
            }
        })

        events = results.concat(events);
        console.log('events in state:', events);
        this.setState({ results: events }, console.log(this.state));
        // console.log('state: ', this.state)
    }

    filterGroups() {
        let results = this.state.results;
        let groups = [];

        Object.values(this.props.groups).forEach(group => {
            if (this.includesKeyword(group.name)) {
                groups.push(group)
            }
        })

        groups = results.concat(groups)
        console.log("groups in state:", groups);
        this.setState({ results: groups }, console.log("state:", this.state))
        // console.log("state: ", this.state);
    }

    filterOutSubcategories() {
        let results = this.state.results;
        let groups = [];

        let groupIds = [];
        Object.values(this.props.subcategories).forEach(subcat => {
            if (this.includesKeyword(subcat.name)) {
                groupIds.push(subcat.group_ids)
            }
        });

        groupIds = groupIds.flat();

        if (groupIds.length === 0) return null;

        groupIds.forEach(groupId => {
            const group = this.props.groups[groupId];
            console.log('subcat', group)
            console.log('subcats', this.state)
            groups.push(group)
        })
        
        groups = results.concat(groups);
        console.log("subcat groups in state:", groups);
        this.setState({ results: groups }, console.log("state:", this.state));
        // console.log("state: ", this.state);
    }

    addAll() {
        const events = Object.values(this.props.events);
        const groups = Object.values(this.props.groups);

        let res = events.concat(groups)

        this.setState({ results: res })
    }

    filterOut(type) {
        switch (type) {
            case 'events':
                console.log('events switch case')
                this.filterEvents();
                break;
            case 'groups':
                console.log('groups switch case')
                this.filterGroups();
                break;
            case 'subcats':
                console.log('subcats switch case')
                this.filterOutSubcategories();
                break;
            case 'none':
                this.addAll();
                break;
            default:
                break;
        }
    }

    clearSearch() {
        this.setState({ results: [] }, console.log("state:", this.state));
    }

    newSearch(query, keywords, keyword) {
        this.clearSearch();

        keywords.push(query);
        this.setState(
          { keywords: keywords },
          console.log("state:", this.state)
        );

        if (query === "") {
            this.filterOut('none')
        } else {
            console.log('filerting...')
            this.filterOut('events');
            this.filterOut('groups');
            this.filterOut('subcats');
            console.log('filtered.', this.state)
        }
    }

    render () {
        const query = this.props.match.params.keyword ? 
            this.props.match.params.keyword : "";
        
        const events = this.props.events;
        const groups = this.props.groups;
        const subcats = this.props.subcategories;
        let keywords = this.state.keywords;
        const keyword = keywords[keywords.length - 1];

        // console.log('RENDERING')
        // console.log(query);
        // console.log(keyword);

        if (!events || !groups || !subcats) return null;


        if (query !== keyword) {
            this.newSearch(query, keywords);
        }

        if (this.state.results.length === 0) { 
            return (
                <div>
                    <h1>Sorry There were no results</h1>
                    <p>try searching for something else</p>
                </div>
            )
        } 

        return (
            <ul>
                {this.state.results.map(result => {
                    let type = "event";
                    if (result.creator_id) type = "group"

                    return (
                        <IndexListItem 
                            entity={result} 
                            type={type}
                            history={this.props.history}
                            key={`result-${result.id}`}
                        />
                    )
                })}
            </ul>
        )
    }
}

export default IndexList;