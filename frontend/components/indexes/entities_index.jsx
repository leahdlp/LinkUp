import React from 'react';
import GroupsIndexItem from './entities_index_item'

const EntitiesIndex = ({ entities, history, indexType }) => (
    <div className="index-page">
        <div className="index-list-container">
            <ul className="index-list">
                {entities.map(entity => (
                    <GroupsIndexItem
                        key={`entity-${entity.id}`}
                        history={history}
                        entity={entity}
                        indexType={indexType}
                    />
                ))}
            </ul>
        </div>
    </div>
)

export default EntitiesIndex;