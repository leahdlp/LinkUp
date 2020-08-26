import { 
    RECEIVE_MEMBER, 
    REMOVE_MEMBER, 
    RECEIVE_MEMBERS 
} from '../../actions/members_actions';

const membersReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_MEMBERS:
            return action.members;
        case RECEIVE_MEMBER:
            nextState[action.member.id] = action.member;
            return nextState;
        case REMOVE_MEMBER:
            delete nextState[action.memberId];
            return nextState;
        default:
            return oldState;
    }

}

export default membersReducer;