import * as AttendeesAPIUtil from '../util/attendees_api_util';

export const RECEIVE_ATTENDEES = 'RECEIVE_ATTENDEES';
export const RECEIVE_ATTENDEE = 'RECEIVE_ATTENDEE';
export const REMOVE_ATTENDEE = 'REMOVE_ATTENDEE';
export const RECEIVE_ATTENDEE_ERRORS = 'RECEIVE_ATTENDEE_ERRORS';
export const CLEAR_ATTENDEE_ERRORS = 'CLEAR_ATTENDEE_ERRORS';

const receiveAttendees = attendees => ({
    type: RECEIVE_ATTENDEES,
    attendees
})

const receiveAttendee = attendee => ({
    type: RECEIVE_ATTENDEE,
    attendee
})

const removeAttendee = attendeeId => ({
    type: REMOVE_ATTENDEE,
    attendeeId
})

const receiveAttendeeErrors = errors => ({
    type: RECEIVE_ATTENDEE_ERRORS,
    errors
})

const clearAttendeeErrors = () => ({
    type: CLEAR_ATTENDEE_ERRORS
})

export const fetchAttendees = eventId => dispatch => (
    AttendeesAPIUtil.fetchAttendees(eventId)
        .then(attendees => dispatch(receiveAttendees(attendees)))
        .fail(errors => dispatch(receiveAttendeeErrors(errors.responseJSON)))
)

export const fetchAttendee = attendeeId => dispatch => (
    AttendeesAPIUtil.fetchAttendee(attendeeId)
        .then(attendee => dispatch(receiveAttendee(attendee)))
        .fail(errors => dispatch(receiveAttendeeErrors(errors.responseJSON)))
)

export const createAttendee = attendee => dispatch => (
    AttendeesAPIUtil.createAttendee(attendee)
        .then(attendee => dispatch(receiveAttendee(attendee)))
        .fail(errors => dispatch(receiveAttendeeErrors(errors.responseJSON)))
)

export const deleteAttendee = attendeeId => dispatch => (
    AttendeesAPIUtil.deleteAttendee(attendeeId)
        .then(attendee => dispatch(removeAttendee(attendee.id)))
        .fail(errors => dispatch(receiveAttendeeErrors(errors.responseJSON)))
)