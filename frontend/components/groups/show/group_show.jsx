import React from 'react';
import GroupShowHeader from './group_show_header';
import MemberList from './members/member_list'

class GroupShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let groupId = this.props.match.params.groupId;
        this.props.fetchGroup(groupId);
        // this.props.fetchMembers(groupId);
    }

    afterMount() {
        const group = this.props.group
        console.log(this.props.members)
        return (
            <div>
                <GroupShowHeader 
                    name={group.name}
                    creatorId={group.creator_id}
                    locationId={group.location_id}
                    group={group}
                    createMember={this.props.createMember}
                />

                <div className="desc-container">
                    <h3>What we're about</h3>
                    <p className="description">
                        {group.description}
                    </p>
                </div>
            
                {group.subcategory_id}

                <MemberList 
                    fetchMembers={this.props.fetchMembers}
                    groupId={this.props.group.id}
                    users={this.props.users}
                    members={this.props.members}
                />
            </div>
        )
    }
    
    render() {
        return (
            this.props.group === undefined ? null : this.afterMount()
        )
    }
}

export default GroupShow;