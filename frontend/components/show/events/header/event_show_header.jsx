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
        <div className="show-pg-header-container">
            <div className="show-pg-header">
                <div className="img-details-header-container">
                    <div className="img-details-header">
                        <div className="group-img-container">
                            {/* <img src={window.communionUrl} alt="" /> */}
                        </div>
                        <div className="group-details-container">
                            <div className="group-details">
                                <h1>{event.name}</h1>
                                <p>
                                    {/* {locations[event.location_id].city},   {locations[event.location_id].state} */}
                                </p>
                                {/* <p>{attendees}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default EventShowHeader;