import {
    RECEIVE_EVENT, RECEIVE_EVENT_ERRORS, CLEAR_EVENT_ERRORS
} from '../../actions/events_actions'

const eventsErrorsReducer = (oldState=[], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_EVENT:
            return [];
        case RECEIVE_EVENT_ERRORS:
            console.log(action)
            return action.errors;
        case CLEAR_EVENT_ERRORS:
            return [];
        default:
            return oldState;
    }
}

export default eventsErrorsReducer;