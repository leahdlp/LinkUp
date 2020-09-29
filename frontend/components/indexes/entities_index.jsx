import React from 'react';
import GroupsIndexItem from './entities_index_item'

class EntitiesIndex extends React.Component {
    componentDidMount() {
        this.props.fetchEntities();
    }
    
    render () {
        return (
            <div className="index-page">
                <div className="index-list-container">
                    <ul className="index-list">
                        {this.props.entities.map(entity => (
                            <GroupsIndexItem
                                key={`entity-${entity.id}`}
                                history={this.props.history}
                                entity={entity}
                                indexType={this.props.indexType}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default EntitiesIndex;