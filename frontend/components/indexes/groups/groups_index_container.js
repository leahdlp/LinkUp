import { connect } from 'react-redux';
import { fetchGroups, fetchGroup } from '../../../actions/groups_actions';

import EntitiesIndex from '../entities_index';

const mapStateToProps = state => ({
    entities: Object.values(state.entities.groups),
    indexType: "Group"
})

const mapDispatchToProps = dispatch => ({
    fetchEntities: () => dispatch(fetchGroups()),
    fetchEntity: groupId => dispatch(fetchGroup(groupId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EntitiesIndex);