import { connect } from 'react-redux';

import { fetchEvents, fetchEvent } from '../../../actions/events_actions';
import EntitiesIndex from '../entities_index';

const mapStateToProps = (state, ownProps) => ({
    entities: Object.values(state.entities.events),
    indexType: "Event"
    // event: state.props.events[ownProps.match.params.eventId]
})

const mapDispatchToProps = dispatch => ({
    fetchEntities: () => dispatch(fetchEvents()),
    // fetchEntity: eventId => dispatch(fetchEvent(eventId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EntitiesIndex)