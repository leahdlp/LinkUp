import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            search: "",
            queried: false,
            results: []
        }

        this.update - this.update.bind(this);
        // this.filterOut = this.filterOut.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update() {
        this.setState({ search: event.target.value })
    }

    // filterOut(type) {
    //     this.setState({ queried: true })

    //     this.props.entities.forEach(entity => (
    //         this.state.results.push(entity)
    //     ))
    // }

    handleSubmit() {
        // this.props.fetchGroups();
        // this.props.fetchEvents();
        // this.props.fetchSubcategories();
        this.props.setKeyword(this.state.search);
        if (this.state.search === "") {
            this.props.history.push('/find')
        } else {
            this.props.history.push(`/find/keyword=${this.state.search}`);
        }
    }

    render() {
        return (
            <form onSubmit={() => this.handleSubmit()}>
                <input type="text" onChange={() => this.update()} id="nav-search" />
                <input type="submit" value="Search" className="search-btn"/>
            </form>
        )

        // query for all possible entities
        // filter out results 
        // conditions: push to results state
            // if entity nmae includes search word
            // if subcategory name includes searchword find entities with subcat index
        // 

    }
}

export default SearchBar;