import {
    RECEIVE_GROUPS,
    RECEIVE_GROUP,
    REMOVE_GROUP
} from '../../actions/groups_actions';
import { RECEIVE_MEMBER, REMOVE_MEMBER } from '../../actions/members_actions';

const groupsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    // debugger
    switch (action.type) {
        case RECEIVE_GROUPS:
            return action.groups;
        case RECEIVE_GROUP:
            // if (!nextState[action.group.id]) {
            //     nextState = Object.assign(nextState, action.group)
            // }
            nextState[action.group.id] = action.group;
            return nextState;
        case REMOVE_GROUP:
            delete nextState[action.groupId];
            return nextState;
        // case RECEIVE_MEMBER:
        //     let group = nextState.groups[action.member.group_id]
        //     group.members.push(action.member.id);
        //     return nextState;
        // case REMOVE_MEMBER:
        //     let groupId = action.member.group_id;
        //     group = nextState.groups[groupId];
        //     let members = group.members
        //     let idx = members.indexOf(action.member.id);
        //     membersArr = members.slice(0, idx) + members.slice(idx + 1)
        //     nextState.groups[groupId].members = membersArr;
        //     return nextState;
        default:
            return oldState;
    }
}

export default groupsReducer;