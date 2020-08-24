import { connect } from 'react-redux';
import { fetchGroup, fetchGroups } from '../../../actions/groups_actions';
import { createMember, fetchMembers } from '../../../actions/members_actions';
import { fetchSubcategory } from '../../../actions/subcategories_actions';
import { fetchLocation } from '../../../actions/locations_actions';
import GroupShow from './group_show'

const mapStateToProps = (state, ownProps)=> ({
    group: state.entities.groups[ownProps.match.params.groupId],
    members: Object.values(state.entities.members),
    subcategories: Object.values(state.entities.subCategories),
    state: state
})

const mapDispatchToProps = dispatch => ({
    fetchGroup: groupId => dispatch(fetchGroup(groupId)),
    fetchGroups: () => dispatch(fetchGroups()),
    fetchMembers: groupId => dispatch(fetchMembers(groupId)),
    createMember: groupId => dispatch(createMember(groupId)),
    fetchSubcategory: subCatId => dispatch(fetchSubcategory(subCatId)),
    fetchLocation: locationId => dispatch(fetchLocation(locationId))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupShow)