import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            search: "",
        }

        this.update - this.update.bind(this);
        this.redirect = this.redirect.bind(this);
        this.search = this.search.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update() {
        this.setState({ search: event.target.value })
    }

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
        this.props.setKeyword(this.state.search);

        if (this.state.search !== this.props.keyword) {
            this.props.clearSearch()
        }
        this.search();
        this.redirect();
    }

    render() {
        return (
          <form onSubmit={() => this.handleSubmit()}>
                <i class="fas fa-search"></i>
                <input type="text" value={this.state.search} onChange={() => this.update()} id="nav-search" />
          </form>
        );
    }
}

export default SearchBar;