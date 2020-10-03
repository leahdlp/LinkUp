import { connect } from "react-redux";
import { fetchAttendees } from "../../../actions/attendees_actions";
import { fetchEvent } from "../../../actions/events_actions";
import AttendeeIndex from "./attendee_index";

const mapStateToProps = (state, ownProps) => ({
    eventId: ownProps.match.params.eventId,
    event: state.entities.events[ownProps.match.params.eventId],
    attendees: Object.values(state.entities.attendees),
});

const mapDispatchToProps = dispatch => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    fetchAttendees: eventId => dispatch(fetchAttendees(eventId))
})


export default connect(mapStateToProps, mapDispatchToProps)(AttendeeIndex);
