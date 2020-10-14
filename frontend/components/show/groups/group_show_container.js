import { connect } from 'react-redux';
import React from 'react';

import { fetchUser } from '../../../actions/user_actions';
import { fetchGroup, fetchGroups, deleteGroup } from '../../../actions/groups_actions';
import { createMember, fetchMembers, deleteMember } from '../../../actions/members_actions';
import { fetchEvents } from '../../../actions/events_actions';
import { fetchSubcategory } from '../../../actions/subcategories_actions';
import { fetchLocation } from '../../../actions/locations_actions';
import { fetchAttendees } from '../../../actions/attendees_actions';

import GroupShow from './group_show'

class GroupPage extends React.Component {
    componentDidMount() {
        let groupId = this.props.match.params.groupId;
        this.props.fetchEvents();
        this.props.fetchMembers(groupId);
        this.props.fetchGroup(groupId)
            .then(promise => this.props.fetchLocation(promise.group.location_id));
    }

    render() {
        if (this.props.group === undefined) return null;
        if (this.props.members === undefined) return null;
        if (this.props.locations === undefined) return null;

        return (
            <GroupShow 
                history={this.props.history}
                currentUser={this.props.currentUser}
                group={this.props.group}
                events={this.props.events}
                members={this.props.members}
                attendees={this.props.attendees}
                locations={this.props.locations}
                subcategories={this.props.subcategories}
                createMember={this.props.createMember}
                deleteMember={this.props.deleteMember}
                deleteGroup={this.props.deleteGroup}
                fetchSubcategory={this.props.fetchSubcategory}
                fetchAttendees={this.props.fetchAttendees}
                fetchUser={this.props.fetchUser}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    group: state.entities.groups[ownProps.match.params.groupId],
    members: state.entities.members,
    events: state.entities.events,
    locations: state.entities.locations,
    subcategories: state.entities.subCategories,
    attendees: state.entities.attendees,
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    fetchGroup: groupId => dispatch(fetchGroup(groupId)),
    deleteGroup: groupId => dispatch(deleteGroup(groupId)),
    fetchEvents: () => dispatch(fetchEvents()),
    fetchMembers: groupId => dispatch(fetchMembers(groupId)),
    createMember: groupId => dispatch(createMember(groupId)),
    deleteMember: memberId => dispatch(deleteMember(memberId)),
    fetchSubcategory: subCatId => dispatch(fetchSubcategory(subCatId)),
    fetchLocation: locationId => dispatch(fetchLocation(locationId)),
    fetchAttendees: eventId => dispatch(fetchAttendees(eventId)), 
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupPage);