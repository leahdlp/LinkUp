import { RECEIVE_LOCATIONS, RECEIVE_LOCATION } from '../../actions/locations_actions';

const locationsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_LOCATIONS:
            return action.locations;
        case RECEIVE_LOCATION:
            nextState[action.location.id] = action.location;
            return nextState;
        default:
            return oldState;
    }
}

export default locationsReducer;