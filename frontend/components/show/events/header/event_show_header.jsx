import React from 'react';

const EventShowHeader = ({
    currentUser,
    attendees,
    locations,
    event,
    createAttendee, 
    deleteAttendee,
    deleteEvent
}) => {

    if (locations === undefined) return null;

    return (
        <div className="event-show-header-container">
            <div className="event-show-header">
                <h1>{event.name}</h1>
                <p>
                    {/* {locations[event.location_id].city},   {locations[event.location_id].state} */}
                </p>
                {/* <p>{attendees}</p> */}
            </div>
        </div>
    )

}

export default EventShowHeader;