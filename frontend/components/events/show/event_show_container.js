import { connect } from 'react-redux';

import { updateEvent } from '../../../actions/events_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => ({
    event: state.entities.events[ownProps.match.params.eventId]
})

const mapDispatchToProps = dispatch => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    processForm: eventId => dispatch(updateEvent(eventId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventShow)