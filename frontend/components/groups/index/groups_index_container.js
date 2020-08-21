import { connect } from 'react-redux';
import { fetchGroups, fetchGroup } from '../../../actions/groups_actions';

import GroupsIndex from './groups_index';

const mapStateToProps = state => ({
    groups: Object.values(state.entities.groups)
})

const mapDispatchToProps = dispatch => ({
    fetchGroups: () => dispatch(fetchGroups()),
    fetchGroup: groupId => dispatch(fetchGroup(groupId))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupsIndex);