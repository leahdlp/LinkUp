import React from 'react';
import AttendeeListItem from './attendee_list_item';
import { Link } from 'react-router-dom';

const AttendeeList = ({ attendees, eventId, users }) => {
    let count = 1;
    let see = Object.values(attendees).length > 8 ? 
        <Link 
            to={`/events/${eventId}/attendees`}
            id="see-all">
            See all
        </Link> : "";

    let eventAtts = [];
    Object.values(attendees).forEach(attendee => {
      if (attendee.event_id === eventId) eventAtts.push(attendee)
    })

    return (
      <div className="attendee-list-container">
        <div className="attendee-list-header">
            <h3>Attendee List ({eventAtts.length} attendees):</h3>
            {see}
        </div>
        <ul className="attendee-list">
          {eventAtts.map((attendee) => {
            if (count <= 8) {
              count += 1;
              return (
                <AttendeeListItem
                  key={`attendee-${attendee.id}`}
                  attendee={attendee}
                  users={users}
                />
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
}

export default AttendeeList;