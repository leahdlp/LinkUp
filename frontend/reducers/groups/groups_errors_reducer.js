import {
    RECEIVE_GROUP,
    RECEIVE_GROUP_ERRORS,
    CLEAR_GROUP_ERRORS
} from '../../actions/groups_actions';

const groupErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_GROUP:
            return [];
        case RECEIVE_GROUP_ERRORS:
            return action.errors
        case CLEAR_GROUP_ERRORS:
            return [];
        default:
            return oldState;
    }
}

export default groupErrorsReducer;