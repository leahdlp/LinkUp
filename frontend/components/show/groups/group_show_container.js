import { connect } from 'react-redux';
import React from 'react';

import { fetchUser } from '../../../actions/user_actions';
import { fetchGroup, fetchGroups, deleteGroup } from '../../../actions/groups_actions';
import { createMember, fetchMembers, deleteMember } from '../../../actions/members_actions';
import { fetchEvent } from '../../../actions/events_actions';
import { fetchSubcategory } from '../../../actions/subcategories_actions';
import { fetchLocation } from '../../../actions/locations_actions';
import { fetchAttendees } from '../../../actions/attendees_actions';

import GroupShow from './group_show'

class GroupPage extends React.Component {
    componentDidMount() {
        let groupId = this.props.match.params.groupId;
        this.props.fetchGroup(groupId)
            .then(action => {
                action.group.event_ids.forEach(event_id => {
                    this.props.fetchEvent(event_id)
                })
            })
        this.props.fetchMembers(groupId);
    }

    render() {
        if (this.props.group === undefined) return null;
        if (this.props.members === undefined) return null;

        return (
            <GroupShow 
                history={this.props.history}
                currentUser={this.props.currentUser}
                group={this.props.group}
                events={this.props.events}
                members={this.props.members}
                attendees={this.props.attendees}
                createMember={this.props.createMember}
                deleteMember={this.props.deleteMember}
                deleteGroup={this.props.deleteGroup}
                fetchAttendees={this.props.fetchAttendees}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    group: state.entities.groups[ownProps.match.params.groupId],
    members: state.entities.members,
    events: state.entities.events,
    attendees: state.entities.attendees,
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    fetchGroup: groupId => dispatch(fetchGroup(groupId)),
    deleteGroup: groupId => dispatch(deleteGroup(groupId)),
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    fetchMembers: groupId => dispatch(fetchMembers(groupId)),
    createMember: groupId => dispatch(createMember(groupId)),
    deleteMember: memberId => dispatch(deleteMember(memberId)),
    fetchAttendees: eventId => dispatch(fetchAttendees(eventId))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupPage);