import React from 'react';
import { Link } from 'react-router-dom'
import EventShowHeader from './header/event_show_header';
import AttendeeList from './attendees/attendee_list';
import EventBar from './event_bar/event_bar';
import Sidebar from './sidebar/sidebar';

class EventShow extends React.Component {
    componentDidMount() {
        this.props.fetchEvent(parseInt(this.props.match.params.eventId))
            .then(action => {
                this.props.fetchAttendees(action.event.id);
                this.props.fetchGroup(action.event.group_id);
            })
    }

    render () {
        if (this.props.event === undefined) return null;
        if (Object.values(this.props.groups).length === 0) return null;
       
        const event = this.props.event
        const group = this.props.groups[event.group_id]
        const attendees = this.props.attendees;
        const location = event.location;
        const host = event.host;

        return (
          <div className="event-show-pg">
            <EventShowHeader
              host={host}
              location={location}
              event={event}
            />
            <div className="event-show-main">
              <div className="event-show-body-container">
                <div className="event-show-body">
                  <div className="event-img-container">
                    <div className="event-img"></div>
                  </div>
                  <div className="details-section-container">
                    <div className="details-section">
                      <h3>Details</h3>
                      {event.description}
                    </div>
                  </div>

                  <div className="attendee-section">
                    <div className="attendee-container">
                      <AttendeeList
                        eventId={event.id}
                        attendees={attendees}
                      />
                    </div>
                  </div>

                  <div className="event-group-container">
                    <Link
                      className="event-group"
                      to={`/groups/${event.group_id}`}
                    >
                      <div className="event-group-link-info">
                        <div className="event-group-pic"></div>
                        <p>{group.name}</p>
                      </div>

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
                deleteEvent={this.props.deleteEvent}
                createAttendee={this.props.createAttendee}
                deleteAttendee={this.props.deleteAttendee}
                attendees={attendees}
                host={host}
                history={this.props.history}
                currentUser={this.props.currentUser}
              />
            </div>
          </div>
        );
    }
}

export default EventShow;