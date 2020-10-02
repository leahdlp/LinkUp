import React from 'react';
import { Link } from 'react-router-dom'
import EventShowHeader from './header/event_show_header';
import AttendeeList from './attendees/attendee_list';
import EventBar from './event_bar/event_bar';

class EventShow extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.event = this.props.event;
    //     // this.location = this.props.locations[event.location_id];
    //     // this.attendees = this.props.attendees;
    // }

    componentDidMount() {
        if (Object.values(this.props.events).length === 0) fetchEvents();

        this.props.fetchLocations();
        this.props.fetchEvent(parseInt(this.props.match.params.eventId))
            .then(action => {
                console.log(action.event.id)
                this.props.fetchAttendees(action.event.id)
            })
    }

    render () {
        if (Object.values(this.props.events).length === 0) return null;
        if (this.props.event === undefined) return null;
        if (Object.values(this.props.locations).length === undefined) return null;
        // if (Object.values(this.props.attendees).length === 0) return null;

        const event = this.props.event
        const location = this.props.locations[event.location_id];
        const attendees = this.props.attendees;

        return (
          <div className="event-show-pg">
            <EventShowHeader
              currentUser={this.props.currentUser}
              attendees={attendees}
              locations={location}
              event={event}
              deleteEvent={this.props.deleteEvent}
            />

            <div className="details-section-container">
              <div className="details-section">
                <h3>Details:</h3>
                {event.description}
              </div>
            </div>

            <div className="attendee-section">
              <div className="attendee-container">
              <AttendeeList
                eventId={event.id}
                attendees={attendees}
                users={this.props.users}
              />
              </div>
            </div>

            <div className="event-group-container">
              <div className="event-group">
                <Link to={`/groups/${event.group_id}`}>
                  {/* {group.name} */}
                  The Event's Group
                </Link>
              </div>
            </div>

            <div className="event-bar-container">
                <EventBar
                event={event}
                createAttendee={this.props.createAttendee}
                deleteAttendee={this.props.deleteAttendeer}
                attendees={attendees}
                />
            </div>
          </div>
        );
    }
}

export default EventShow;