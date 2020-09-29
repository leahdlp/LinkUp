import React from 'react';
import EventShowHeader from './header/event_show_header';
import AttendeeList from './attendees/attendee_list';

class EventShow extends React.Component {
    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId)
            .then(promise => this.props.fetchLocation(promise.event.location_id))
    }

    render () {
        const event = this.props.event

        if (event === undefined) return null;

        return (
            <div>
                <EventShowHeader
                    currentUser={this.props.currentUser}
                    attendees={this.props.attendees}
                    locations={this.props.locations}
                    event={event}
                    createAttendee={this.props.createAttendee}
                    deleteAttendee={this.props.deleteAttendeer}
                    deleteEvent={this.props.deleteEvent}
                />
                <div className="attendee-section">
                    <div className="attendee-container">
                        <AttendeeList
                            eventId={this.props.event.id}
                            attendees={this.props.attendees}
                            users={this.props.users}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default EventShow;