import React from 'react';
import AttendeeListItem from './attendee_list_item';
import { Link } from 'react-router-dom';

const AttendeeList = ({ attendees, users }) => {
    let count = 1;
    let see = Object.values(attendees).length > 8 ? 
        <Link 
            to={`/events/${event.id}/attendees`}
            id="see-all">
            See all
        </Link> : "";

    return (
      <div className="attendee-list-container">
        <div className="attendee-list-header">
            <h3>Attendee List ({Object.values(attendees).length} attendees):</h3>
            {see}
        </div>
        <ul className="attendee-list">
          {Object.values(attendees).map((attendee) => {
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