import {
    RECEIVE_ATTENDEES, RECEIVE_ATTENDEE, REMOVE_ATTENDEE
} from '../../actions/attendees_actions';

const attendeesReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ATTENDEES:
            const attendees = action.attendees;
            for (let id in attendees) {
                nextState[id] = attendees[id];
            }

            return nextState;
        case RECEIVE_ATTENDEE:
            nextState[action.attendee.id] = action.attendee;
            return nextState;
        case REMOVE_ATTENDEE:
            delete nextState[action.attendeeId]
            return nextState;
        default:
            return oldState;
    }
}

export default attendeesReducer;