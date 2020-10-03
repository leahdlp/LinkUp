import React from 'react';
import Tab from './nav_tab_item'

class NavTabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: 0
        }

        this.selectTab = this.selectTab.bind(this);
        this.allMembers = this.allMembers.bind(this);
        this.separateAttendees = this.separateAttendees.bind(this);
        this.numAttendees = this.numAttendees.bind(this);
        this.allEvents = this.allEvents.bind(this);
    }

    componentDidMount() {
        Object.values(this.props.events).map(event => (
            this.props.fetchAttendees(event.id)
        ))
    }

    selectTab(idx) {
        this.setState({ currentTab: idx })
    }

    allMembers() {
        const members = this.props.members;

        if (Object.values(members).length === 0) return null;

        return (
            <div className="tab-member-list-container">
                <ul className="tab-member-list">
                    {Object.values(members).map(member => {
                        if (member.group_id === this.props.group.id) {
                            return (
                                <li
                                key={`member-${member.id}`}
                                className="tab-member">
                                    <div className="member-photo"></div>
                                    {member.name}
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        )
    }

    separateAttendees() {
        // debugger
        const events = this.props.events;
        const attendees = this.props.attendees

        const eventIds = Object.keys(events);
        const separated = {};

        for (let id in attendees) {
            if (separated[attendees[id].event_id]) {
                separated[attendees[id].event_id].push(attendees[id])
            } else {
                separated[attendees[id].event_id] = [attendees[id]];
            }
        }

        // debugger

        return separated;
    }

    numAttendees(eventId) {
        // debugger
        const attendees = this.separateAttendees();

        if (!attendees[eventId]) return 0;
        
        return attendees[eventId].length
    }

    allEvents() {
        const events = this.props.events;
        // console.log(this.props.history)
        if (Object.values(events).length === 0) return null;

        return (
            <div>
                <ul className="tab-events">
                    {Object.values(events).map(event => {
                        if (event.group_id === this.props.group.id) {
                            return (
                                <li 
                                    key={`event-${event.id}`} 
                                    className="tab-event-item"
                                    onClick={() => this.props.history.push
                                        (`/events/${event.id}`)}>
                                    <div className="tab-event">
                                        <div className="tab-event-head">
                                            <div className="tab-event-head-info">
                                                <p className='ge-datetime'>{event.date_time}</p>
                                                <p className='ge-name'>{event.name}</p>
                                            </div>
                                            <div className='group-event-img'></div>
                                        </div>
                                        <div className="tab-event-foot">
                                            <p className='ge-desc'>{event.description}</p>
                                        </div>
                                        <div className="group-event-bar">
                                            <p>
                                                {this.numAttendees(event.id)} attendees
                                            </p>
                                            <button onClick={() => this.props.history.push
                                                (`/events/${event.id}`)}>
                                                Attend
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        )
    }

    setHeader(idx) {
        if (idx === 0) {
            return <h3>What we're about</h3>
        }
    }

    render() {
        const idx = this.state.currentTab;
        const panes = [
            { title: "About", content: this.props.group.description }, 
            { title: "Events", content: this.allEvents() }, 
            { title: "Members", content: this.allMembers() }, 
            { title: "Photos", content: "Pics" }
        ];
        const selected = panes[idx];


        return (
            <div className="tab">
                <div className="tab-header-container">
                    <Tab 
                        currentPane={this.state.currentTab}
                        switchTab={this.selectTab}
                        panes={panes}
                    />
                </div>
                <div className="tab-content-container">
                    <div className="tab-content">
                        {this.setHeader(idx)}
                        <article>
                            {selected.content}
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavTabs;