import React from 'react';
import GroupShowHeaderNav from './group_show_header_nav'

const GroupShowHeader = ({ 
    group, 
    members, 
    location, 
    createMember, 
    deleteMember,
    deleteGroup,
    currentUser 
}) => {

    if (location[group.location_id] === undefined) return null;
 
    return (
        <div className="show-pg-header-container">
            <div className="show-pg-header">
                <div className="img-details-header-container">
                    <div className="img-details-header">
                        <div className="group-img-container"></div>
                        <div className="group-details-container">
                            <div className="group-details">
                                <h1>{group.name}</h1>
                                <p>
                                    {location[group.location_id].city},   {location[group.location_id].state}
                                </p>
                                <p>{members[group.creatorId]}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <GroupShowHeaderNav
                    currentUser={currentUser}
                    group={group}
                    members={members}
                    createMember={createMember}
                    deleteMember={deleteMember}
                    deleteGroup={deleteGroup}
                    id="grp-show-nav"
                />
            </div>
        </div>
    )
}

export default GroupShowHeader;