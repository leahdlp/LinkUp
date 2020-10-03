import React from 'react';

const AttendeeIndexItem = ({ attendee }) => (
    <li className="att-index-item">
        <div className="att-index-img"></div>
        {attendee.name}
    </li>
)

export default AttendeeIndexItem;