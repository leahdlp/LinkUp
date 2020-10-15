import React from 'react';
import AttendeeListItem from './attendee_list_item';
import { Link } from 'react-router-dom';

const AttendeeList = ({ attendees, eventId }) => {
    let eventAtts = [];


    Object.values(attendees).forEach(attendee => {
      if (attendee.event_id === eventId) eventAtts.push(attendee)
    })
    
    let see = eventAtts.length > 8 ? 
    <Link 
    to={`/events/${eventId}/attendees`}
    id="see-all">
              See all
          </Link> : "";

    let count = 1;
    return (
      <div className="attendee-list-container">
        <div className="attendee-list-header">
            <h3>Attendees ({eventAtts.length})</h3>
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