import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USER } from '../../actions/user_actions';

const usersReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    let id;

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            id = action.currentUser.id
            return Object.assign(nextState, { [id]: action.currentUser })
        case RECEIVE_USER:
            id = action.user.id
            return Object.assign(nextState, { [id]: action.user })
        default:
            return oldState;
    }
}

export default usersReducer;