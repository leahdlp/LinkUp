import React from 'react';
import { Link } from 'react-router-dom';
import AttendeeIndexItem from './attendee_index_item';

class AttendeeIndex extends React.Component {
    constructor(props) {
        super(props);

        this.filterAttendees = this.filterAttendees.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.eventId)
            .then(action => this.props.fetchAttendees(action.event.id))
    }

    filterAttendees() {
        const event = this.props.event;
        const attendees = this.props.attendees;

        const filtered = event.attendee_ids.map(id => attendees[id])
        return filtered;
    }

    render() {
        const event = this.props.event;
        let attendees = this.props.attendees;

        if (event === undefined || Object.values(attendees).length === 0) return null;

        attendees = this.filterAttendees()
        
        return (
          <div className="att-idx-pg">
            <div className="att-idx-style-bar"></div>
            <ul className="attendee-index">
                <div className="att-idx-header">
                    <i 
                        id="att-idx-arrow" 
                        className="fas fa-chevron-left"
                        onClick={() => this.props.history.push(`/events/${event.id}`)}></i>
                    <div className="att-idx-info">
                        <h3> Attendees ({attendees.length})</h3>
                        <Link 
                            className="att-idx-link"
                            to={`events/${this.props.eventId}`}
                            >{event.name}</Link>
                    </div>

                </div>
                {attendees.map(attendee => (
                    <AttendeeIndexItem
                        key={`attendee-${attendee.id}-${attendee.name}`}
                        attendee={attendee}
                    />
                ))}
            </ul>
          </div>
        );

    }
}

export default AttendeeIndex;