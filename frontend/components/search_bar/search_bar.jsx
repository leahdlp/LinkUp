import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            search: "",
            result: []
        }

        this.update - this.update.bind(this);
        this.filterOut = this.filterOut.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update() {
        this.setState({ search: event.target.value })
    }

    filterOut(type) {
        // this.props.groups.map(group => (
            
        // ))
    }

    handleSubmit() {
        this.props.fetchGroups();
        this.props.fetchEvents();
        this.props.fetchSubcategories();
    }

    render() {


        // query for all possible entities
        // filter out results 
        // conditions: push to results state
            // if entity nmae includes search word
            // if subcategory name includes searchword find entities with subcat index
        // 

    }
}

export default SearchBar;