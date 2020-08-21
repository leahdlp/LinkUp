import React from 'react';
import GroupShowHeader from './group_show_header';

class GroupShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let groupId = this.props.match.params.groupId;
        this.props.fetchGroup(groupId);
    }
    
    render() {
        const group = this.props.group

        return (
            <div>
                <GroupShowHeader 
                    name={group.name}
                    creatorId={group.creator_id}
                    locationId={group.location_id}
                    group={group}
                />

                <div className="desc-container">
                    <h3>What we're about</h3>
                    <p className="description">
                        {group.description}
                    </p>
                </div>

                {group.subcategory_id}
            </div>
        )
    }
}

export default GroupShow;