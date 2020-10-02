import React from 'react';
import GroupShowHeaderNav from './group_show_header_nav'

const GroupShowHeader = ({ 
    group, 
    members, 
    locations, 
    createMember, 
    deleteMember,
    deleteGroup,
    currentUser 
}) => {
    if (locations[group.location_id] === undefined) return null;
    // let klass = `group-img-container-${group.id}`
 
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
                                <p>
                                    {locations[group.location_id].city}, 
                                    {locations[group.location_id].state}
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