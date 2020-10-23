import React from 'react';
import EntitiesIndexItem from './entities_index_item'

const EntitiesIndex = ({ entities, history, indexType }) => (
    <div className="index-page">
        <div className="index-list-container">
            <ul className="index-list">
                {entities.map((entity, idx) => (
                    <EntitiesIndexItem
                        key={`entity-${entity.id}`}
                        history={history}
                        entity={entity}
                        indexType={indexType}
                        idx={idx}
                    />
                ))}
            </ul>
        </div>
    </div>
)

export default EntitiesIndex;