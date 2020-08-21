import { connect } from 'react-redux';
import { fetchGroup, fetchGroups } from '../../../actions/groups_actions'
import GroupShow from './group_show'

const mapStateToProps = (state, ownProps)=> ({
    group: state.entities.groups[ownProps.match.params.groupId]
})

const mapDispatchToProps = dispatch => ({
    fetchGroup: groupId => dispatch(fetchGroup(groupId)),
    fetchGroups: () => dispatch(fetchGroups())
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupShow)