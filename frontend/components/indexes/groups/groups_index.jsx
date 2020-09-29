import React from 'react';
import GroupsIndexItem from './groups_index_item'

class GroupsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchGroups();
    }
    
    render () {
        return (
            <div className="group-index-page">
                <div className="group-list-container">
                    <ul className="group-list">
                        {this.props.groups.map(group => (
                            <GroupsIndexItem
                                key={`group-${group.id}`}
                                history={this.props.history}
                                group={group}
                                fetchGroup={this.props.fetchGroup}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default GroupsIndex;