import { connect } from 'react-redux';
import { fetchGroup, fetchGroups } from '../../../actions/groups_actions';
import { createMember } from '../../../actions/members_actions';
import GroupShow from './group_show'
import { fetchMembers } from '../../../actions/members_actions';

const mapStateToProps = (state, ownProps)=> ({
    group: state.entities.groups[ownProps.match.params.groupId],
    members: Object.values(state.entities.members),
    // users: state.entities.users
})

const mapDispatchToProps = dispatch => ({
    fetchGroup: groupId => dispatch(fetchGroup(groupId)),
    fetchGroups: () => dispatch(fetchGroups()),
    fetchMembers: groupId => dispatch(fetchMembers(groupId)),
    createMember: groupId => dispatch(createMember(groupId))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupShow)