import React from 'react';

const AttendeeListItem = ({ attendee }) => {
    return (
        <li key={`attendee-${attendee.id}`} className="attendee-list-item">
            {attendee.name}
        </li>
    )
}

export default AttendeeListItem;