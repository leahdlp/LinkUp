import React from 'react';
import EntitiesIndex from '../indexes/entities/entities_index'
import SearchBar from '../search_bar/search_bar'

class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.state = { entity: "Event" };
        
        this.handleUserSelect = this.handleUserSelect.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.renderIndex = this.renderIndex.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchEvents();
        this.props.fetchGroups();
    }

    handleUserSelect(toggle) {
        if (toggle === "Event") {
            document
                .getElementsByClassName("idx-toggle-btn")[1]
                .setAttribute("disabled", "");
            document
                .getElementsByClassName("idx-toggle-btn")[1]
                .setAttribute("id", "toggle-selected");
            document
                .getElementsByClassName("idx-toggle-btn")[0]
                .removeAttribute("disabled");
            document
                .getElementsByClassName("idx-toggle-btn")[0]
                .removeAttribute("id", "toggle-selected");
        } else {
            document
                .getElementsByClassName("idx-toggle-btn")[0]
                .setAttribute("disabled", "");
            document
                .getElementsByClassName("idx-toggle-btn")[0]
                .setAttribute("id", "toggle-selected");
            document
                .getElementsByClassName("idx-toggle-btn")[1]
                .removeAttribute("id", "toggle-selected");
            document
                .getElementsByClassName("idx-toggle-btn")[1]
                .removeAttribute("disabled");
        }
    }

    handleToggle(entity) {
        const toggle = entity === "Event" ? "Group" : "Event";

        this.setState({ entity: toggle }, () => {
            this.handleUserSelect(toggle)
        })
    }

    renderIndex(type) {
        const entities = type === "Event" ? this.props.events : this.props.groups;
        const fetch = type === "Event" ? this.props.fetchEvent : this.props.fetchGroup;

        return (
            <EntitiesIndex 
                indexType={type}
                entities={entities}
                fetchEntity={fetch}
                history={this.props.history}
            />
        )
    }

    render() {
        const events = this.props.events;
        const groups = this.props.groups;

        if (events.length === 0 || groups.length === 0) return null;
        
        return (
            <div className="landing-pg">
                <div className="landing-nav">
                    <div className="index-toggle-container">
                        <div className="index-toggle">
                            <button 
                                className="idx-toggle-btn"
                                onClick={() => this.handleToggle(this.state.entity)}>
                                Groups
                            </button>
                            <button 
                                className="idx-toggle-btn"
                                id="toggle-selected"
                                onClick={() => this.handleToggle(this.state.entity)}>
                                Events
                            </button>
                        </div>
                    </div>
                </div>
                <div className="index-header">
                    <h3>{this.state.entity}s in Your Area!</h3>
                </div>
                {this.renderIndex(this.state.entity)}
            </div>
        )
    }
}

export default Landing;
