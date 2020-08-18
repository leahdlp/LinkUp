import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const usersReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let id = action.currentUser.id
            return Object.assign(nextState, { [id]: action.currentUser })
        default:
            return oldState;
    }
}

export default usersReducer;