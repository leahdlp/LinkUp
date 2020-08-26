import { 
    RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER 
} from '../../actions/session_actions';

const _nullSessionState = { id: null }

const SessionReducer = (oldState=_nullSessionState, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id }
        case LOGOUT_CURRENT_USER:
            return _nullSessionState
        default:
            return oldState;
    }
}

export default SessionReducer;