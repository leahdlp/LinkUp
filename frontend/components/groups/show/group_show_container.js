import { connect } from 'react-redux';
import React from 'react';

import { fetchGroup, fetchGroups, deleteGroup } from '../../../actions/groups_actions';
import { createMember, fetchMembers, deleteMember } from '../../../actions/members_actions';
import { fetchSubcategory } from '../../../actions/subcategories_actions';
import { fetchLocation } from '../../../actions/locations_actions';

import GroupShow from './group_show'

class GroupPage extends React.Component {
    componentDidMount() {
        let groupId = this.props.match.params.groupId;
        this.props.fetchMembers(groupId);
        this.props.fetchGroup(groupId)
            .then(promise => this.props.fetchLocation(promise.group.location_id));
    }

    render() {
        if (this.props.group === undefined) return null;
        if (this.props.members === undefined) return null;
        if (this.props.location === undefined) return null;

        return (
            <GroupShow 
                currentUser={this.props.currentUser}
                group={this.props.group}
                members={this.props.members}
                location={this.props.location}
                subcategories={this.props.subcategories}
                createMember={this.props.createMember}
                deleteMember={this.props.deleteMember}
                deleteGroup={this.props.deleteGroup}
                fetchSubcategory={this.props.fetchSubcategory}
            />
        )
    }
}

const mapStateToProps = (state, ownProps)=> ({
    group: state.entities.groups[ownProps.match.params.groupId],
    members: state.entities.members,
    location: state.entities.locations,
    subcategories: Object.values(state.entities.subCategories),
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    fetchGroup: groupId => dispatch(fetchGroup(groupId)),
    // fetch: () => dispatch(fetchGroups()),
    deleteGroup: groupId => dispatch(deleteGroup(groupId)),
    fetchMembers: groupId => dispatch(fetchMembers(groupId)),
    createMember: groupId => dispatch(createMember(groupId)),
    deleteMember: memberId => dispatch(deleteMember(memberId)),
    fetchSubcategory: subCatId => dispatch(fetchSubcategory(subCatId)),
    fetchLocation: locationId => dispatch(fetchLocation(locationId))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupPage);