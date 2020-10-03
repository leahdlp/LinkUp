import React from 'react';
import { Link } from 'react-router-dom'
import EventShowHeader from './header/event_show_header';
import AttendeeList from './attendees/attendee_list';
import EventBar from './event_bar/event_bar';
import Sidebar from './sidebar/sidebar';

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
                this.props.fetchAttendees(action.event.id)
                this.props.fetchGroup(action.event.group_id)
                  .then(action => this.props.fetchUser(action.group.creator_id))
            })
    }

    render () {
        if (Object.values(this.props.events).length === 0) return null;
        if (this.props.event === undefined) return null;
        if (Object.values(this.props.locations).length === undefined) return null;
        if (Object.values(this.props.groups).length === 0) return null;

        const event = this.props.event
        const group = this.props.groups[event.group_id]
        const location = this.props.locations[event.location_id];
        const attendees = this.props.attendees;
        const host = this.props.users[group.creator_id]
        console.log(this.props.users)
        console.log(host)

        return (
          <div className="event-show-pg">
            <EventShowHeader
              // currentUser={this.props.currentUser}
              // attendees={attendees}
              host={host}
              location={location}
              event={event}
              // deleteEvent={this.props.deleteEvent}
            />
            <div className="event-show-main">
              <div className="event-show-body-container">
                <div className="event-show-body">
                  <div className="event-img-container">
                    <div className="event-img"></div>
                  </div>
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
                    <Link
                      className="event-group"
                      to={`/groups/${event.group_id}`}
                    >
                      <div className="event-group-pic"></div>
                      {group.name}
                      <i className="fas fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="sidebar-container">
                <Sidebar event={event} group={group} />
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