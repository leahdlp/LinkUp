import React from 'react';

const EntitiesIndexItem = ({ history, entity, indexType }) => {
    const link = indexType === "Group" ? 
    `/groups/${entity.id}` : `/events/${entity.id}`;
    
    return (
        <div className="grid-item">
            <li 
                className="index-item"
                onClick={() => history.push(link)}>
                {entity.name}
            </li>
        </div>
    )
}

export default EntitiesIndexItem;