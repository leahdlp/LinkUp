import { connect } from 'react-redux';

import { fetchEvent, deleteEvent, fetchEvents } from '../../../actions/events_actions';
import { fetchAttendees, createAttendee, deleteAttendee } from '../../../actions/attendees_actions';
import { fetchLocations } from '../../../actions/locations_actions';
import { fetchGroup } from '../../../actions/groups_actions';
import { fetchUser } from '../../../actions/user_actions';

import EventShow from './event_show';


const mapStateToProps = (state, ownProps) => ({
    events: state.entities.events,
    event: state.entities.events[ownProps.match.params.eventId],
    groups: state.entities.groups,
    attendees: state.entities.attendees,
    locations: state.entities.locations,
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents()),
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    fetchGroup: groupId => dispatch(fetchGroup(groupId)),
    fetchAttendees: eventId => dispatch(fetchAttendees(eventId)),
    createAttendee: eventId => dispatch(createAttendee(eventId)),
    deleteAttendee: attendeeId => dispatch(deleteAttendee(attendeeId)),
    fetchLocations: () => dispatch(fetchLocations()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    processForm: eventId => dispatch(updateEvent(eventId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventShow)