import React from 'react';
import AttendeeListItem from './attendee_list_item';

const AttendeeList = ({ attendees, users }) => {
    return (
        <div className="attendees-container">
            <div className="attendee-list-container">
                <h3>Attendee List ({Object.values(attendees).length} attendees):</h3>
                <ul className="attendee-list">
                    {Object.values(attendees).map(attendee => (
                        <AttendeeListItem
                            key={`attendee-${attendee.id}`}
                            attendee={attendee}
                            users={users}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default AttendeeList;