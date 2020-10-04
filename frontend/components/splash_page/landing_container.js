import { connect } from 'react-redux';

import { fetchEvents, fetchEvent } from '../../actions/events_actions';
import { fetchGroups, fetchGroup } from '../../actions/groups_actions';

import Landing from './landing';

const mapStateToProps = state => ({
    groups: Object.values(state.entities.groups),
    events: Object.values(state.entities.events),
})

const mapDispatchToProps = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents()),
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    fetchGroups: () => dispatch(fetchGroups()),
    fetchGroup: groupId => dispatch(fetchGroup(groupId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing);