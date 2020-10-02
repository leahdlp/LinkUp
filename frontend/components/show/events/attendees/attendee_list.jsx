import React from 'react';
import AttendeeListItem from './attendee_list_item';

const AttendeeList = ({ attendees, users }) => {
    let count = 1;
    return (
        <div className="attendee-list-container">
            <h3>Attendee List ({Object.values(attendees).length} attendees):</h3>
            <ul className="attendee-list">
                {Object.values(attendees).map(attendee => {
                    if (count <= 8) {
                        count += 1
                        return (
                            <AttendeeListItem
                                key={`attendee-${attendee.id}`}
                                attendee={attendee}
                                users={users}
                            />
                        )
                    } else {
                        return null;
                    }
                })}
            </ul>
        </div>
    )
}

export default AttendeeList;