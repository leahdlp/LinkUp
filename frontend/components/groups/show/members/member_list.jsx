import React from 'react';
import MemberListItem from './member_list_item';

class MemberList extends React.Component {
    componentDidMount() {
        this.props.fetchMembers(this.props.groupId);
    }

    render() {
        return(
            <div className="member-list-container">
                <ul className="member-list">
                    {this.props.members.map(member => (
                        <MemberListItem 
                            key={`member-${member.id}`}
                            member={member} 
                            users={this.props.users}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default MemberList;