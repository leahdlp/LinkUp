import React from 'react';

const AttendeeListItem = ({ attendee }) => {
    let name = attendee.name.split(' ')

    return (
      <div className="attendee-list-item">
        <div className="attendee-photo-container">
          <div className="attendee-photo">
            <img src={attendee.photoUrl} alt=""/>
          </div>
        </div>
        <li key={`attendee-${attendee.id}`} className="attendee-name">
          <p>{name[0]}</p>
          <p>{name[1]}</p>
        </li>
      </div>
    );
}

export default AttendeeListItem;