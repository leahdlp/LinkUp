import React from 'react';

const AttendeeListItem = ({ attendee }) => {
    return (
        <div className="attendee-list-item">
            <div className="attendee-photo-container">
                <div className="attendee-photo"></div>
            </div>
            <li key={`attendee-${attendee.id}`} className="attendee-name">
                {attendee.name}
            </li>
        </div>
    )
}

export default AttendeeListItem;