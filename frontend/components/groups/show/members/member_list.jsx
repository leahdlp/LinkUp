import React from 'react';
import MemberListItem from './member_list_item';

class MemberList extends React.Component {
    componentDidMount() {
        this.props.fetchMembers(this.props.groupId);
    }

    render() {
        return(
            <ul>
                {this.props.members.map(member => (
                    <MemberListItem 
                        key={`member-${member.id}`}
                        member={member} 
                        users={this.props.users}
                    />
                ))}
            </ul>
        )
    }
}

export default MemberList;