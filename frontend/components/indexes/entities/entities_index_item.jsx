import React from 'react';

const EntitiesIndexItem = ({ history, entity, indexType }) => {
    const link = indexType === "Group" ? 
    `/groups/${entity.id}` : `/events/${entity.id}`;
    
    return (
        <div 
            onClick={() => history.push(link)}
            className="grid-item">
            <li className="index-item">
                <img src={entity.photoUrl} alt=""/>
                {entity.name}
            </li>
        </div>
    )
}

export default EntitiesIndexItem;