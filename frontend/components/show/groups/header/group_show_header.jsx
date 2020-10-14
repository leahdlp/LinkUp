import React from 'react';
import GroupShowHeaderNav from './group_show_header_nav'

const GroupShowHeader = ({ 
    group, 
    members,
    attendees,
    events,
    locations, 
    createMember, 
    deleteMember,
    deleteGroup,
    fetchAttendees,
    currentUser,
    history,
    organizer
}) => {
    if (locations[group.location_id] === undefined) return null;

    return (
      <div className="show-pg-header-container">
        <div className="show-pg-header">
          <div className="img-details-header-container">
            <div className="img-details-header">
              <div className="show-img-container">
                {/* <img src={window.communionUrl} alt="" /> */}
              </div>
              <div className="show-details-container">
                <div className="show-details">
                    <h1>{group.name}</h1>
                    <div className="show-sub-details">
                        <div className="show-detail-icons">
                            <i class="fas fa-map-marker-alt"></i>
                            <br />  
                            <i class="fas fa-user-friends"></i>
                            <br />  
                            <i class="fas fa-user-alt"></i>
                        </div>
                        <div className="show-detail-info">
                            <p>
                                {locations[group.location_id].city},
                                {locations[group.location_id].state}
                            </p>
                            <p>
                                {Object.keys(members).length} members
                            </p>
                            <div className="organizer-info">
                              <p>Organized by </p>
                              <p id="organizer"> {organizer}</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <GroupShowHeaderNav
            currentUser={currentUser}
            group={group}
            members={members}
            attendees={attendees}
            events={events}
            createMember={createMember}
            deleteMember={deleteMember}
            deleteGroup={deleteGroup}
            fetchAttendees={fetchAttendees}
            history={history}
            id="grp-show-nav"
          />
        </div>
      </div>
    );
}

export default GroupShowHeader;