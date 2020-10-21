import React from 'react';
import EntitiesIndex from '../indexes/entities/entities_index'
import SearchBar from '../search_bar/search_bar'

class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            entity: "Event", 
            search: "",
            location_id: 0,
        };
        
        this.update = this.update.bind(this);
        this.handleUserSelect = this.handleUserSelect.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.renderIndex = this.renderIndex.bind(this);
        this.filterOut = this.filterOut.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchEvents();
        this.props.fetchGroups();
        this.props.fetchLocations();
    }

    update(field) {
        let value = event.target.value; 
        if (field === "location_id") value = parseInt(value)

        this.setState({ [field]: value })
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
        const groups = Object.values(this.props.groups);
        const events = Object.values(this.props.events);
        const entities = type === "Event" ? this.filterOut(events) : this.filterOut(groups);
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

    filterOut(entities) {
        const search = this.state.search;
        const location_id = this.state.location_id;

        const results = entities.filter(entity => {
            const name = entity.name.toLowerCase();

            if (search === "" && location_id === 0) {
                return name.length > 0
            } else if (location_id === 0) {
                return name.includes(this.state.search.toLowerCase())
            } else if (search === "") {
                return location_id === entity.location_id;
            } else {
                return (
                    name.includes(this.state.search.toLowerCase()) &&
                    location_id === entity.location_id
                )
            }
        });

        return results;
    }

    render() {
        const events = this.props.events;
        const groups = this.props.groups;
        const locations = this.props.locations;

        if (events.length === 0 || 
            groups.length === 0 || 
            locations.length === 0) return null;
        
        return (
            <div className="landing-pg">
                <div className="landing-nav-container">
                    <div className="landing-nav">
                        <div className="search-bar-container" id="landing-search">
                            <input 
                                type="text" 
                                onChange={() => this.update("search")}
                                value={this.state.search}/>
                            <select
                                className="drop-select"
                                defaultValue="default"
                                onChange={() => this.update("location_id")}
                            >
                                <option value="0">
                                -- Anywhere -- 
                                </option>

                                {locations.map(location => (
                                <option
                                    value={location.id}
                                    key={`location-${location.id}`}
                                >
                                    {location.city}, {location.state}
                                </option>
                                ))}
                            </select>
                        </div>
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
