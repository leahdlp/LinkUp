import * as EventsAPIUtil from '../util/events_api_util'

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const CLEAR_EVENT_ERRORS = 'CLEAR_EVENT_ERRORS';

const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
})

const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
})

const removeEvent = eventId => ({
    type: REMOVE_EVENT, 
    eventId
})

const receiveEventErrors = errors => ({
    type: RECEIVE_EVENT_ERRORS,
    errors
})

export const clearEventErrors = () => ({
    type: CLEAR_EVENT_ERRORS
})

export const fetchEvents = () => dispatch => (
    EventsAPIUtil.fetchEvents()
        .then(events => dispatch(receiveEvents(events)))
        .fail(errors => dispatch(receiveEventErrors(errors.responseJSON)))
)

export const fetchEvent = eventId => dispatch => (
    EventsAPIUtil.fetchEvent(eventId)
        .then(event => dispatch(receiveEvent(event)))
        .fail(errors => dispatch(receiveEventErrors(errors.responseJSON)))
)

export const createEvent = event => dispatch => (
    EventsAPIUtil.createEvent(event)
        .then(event => dispatch(receiveEvent(event)))
        .fail(errors => dispatch(receiveEventErrors(errors.responseJSON)))
)

export const updateEvent = event => dispatch => (
    EventsAPIUtil.updateEvent(event)
        .then(event => dispatch(receiveEvent(event)))
        .fail(errors => dispatch(receiveEventErrors(errors.responseJSON)))
)

export const deleteEvent = eventId => dispatch => (
    EventsAPIUtil.deleteEvent(eventId)
        .then(eventId => dispatch(removeEvent(eventId)))
        .fail(errors => dispatch(receiveEventErrors(errors.responseJSON)))
)