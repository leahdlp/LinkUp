import { connect } from 'react-redux';

import { fetchEvents, fetchEvent } from '../../../actions/events_actions';
import EventIndex from './event_index';

const mapStateToProps = (state, ownProps) => ({
    events: state.props.events,
    // event: state.props.events[ownProps.match.params.eventId]
})

const mapDispatchToProps = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents()),
    // fetchEvent: errors => dispatch(fetchEvent(errors)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex)