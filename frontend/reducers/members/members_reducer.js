import { RECEIVE_MEMBER, REMOVE_MEMBER } from '../../actions/members_actions';

const membersReducer = (oldState=[], action) => {
    switch (action.type) {
        case RECEIVE_MEMBER:
            return ['received'];
        case REMOVE_MEMBER:
            return ['removed'];
        default:
            return oldState;
    }
}

export default membersReducer;