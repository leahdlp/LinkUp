import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            search: "",
            // queried: false,
            // results: []
        }

        this.update - this.update.bind(this);
        // this.filterOut = this.filterOut.bind(this);
        this.redirect = this.redirect.bind(this);
        this.search = this.search.bind(this);
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

    redirect() {
        if (this.state.search === "") {
            this.props.history.push('/find')
        } else {
            this.props.history.push(`/find/keyword=${this.state.search}`);
        }
    }

    search() {
        this.props.searchEntities(this.state.search);
    }

    handleSubmit() {
        // this.props.fetchGroups();
        // this.props.fetchEvents();
        // this.props.fetchSubcategories();
        this.props.setKeyword(this.state.search);
        // this.props.clearSearch()

        // if (Object.values(this.props.groups).length > 0 ||
        //     Object.values(this.props.events).length > 0) {
        if (this.state.search !== this.props.keyword) {
            this.props.clearSearch()
                // .then(() => this.search())
            // this.search() 
        // } else {
        }
        this.search();
        this.redirect();
    }

    render() {
        return (
          <form onSubmit={() => this.handleSubmit()}>
              {/* <div className="search-bar"> */}
                <i class="fas fa-search"></i>
                <input type="text" value={this.state.search} onChange={() => this.update()} id="nav-search" />
              {/* </div> */}
            {/* <input type="submit" value="Search" className="search-btn" /> */}
          </form>
        );

        // query for all possible entities
        // filter out results 
        // conditions: push to results state
            // if entity nmae includes search word
            // if subcategory name includes searchword find entities with subcat index
        // 

    }
}

export default SearchBar;