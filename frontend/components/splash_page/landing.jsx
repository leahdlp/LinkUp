import React from 'react';
import EntitiesIndex from '../indexes/entities/entities_index'
import SearchBar from '../search_bar/search_bar'

class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.state = { entity: "Event" };

        this.handleToggle = this.handleToggle.bind(this);
        this.renderIndex = this.renderIndex.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvents();
        this.props.fetchGroups();
    }

    handleToggle(entity) {
        const toggle = entity === "Event" ? "Group" : "Event"
        this.setState({ entity: toggle })
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
                    <div className="index-toggle">
                        <button onClick={() => this.handleToggle(this.state.entity)}>
                            Groups
                        </button>
                        <button onClick={() => this.handleToggle(this.state.entity)}>
                            Events
                        </button>
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
