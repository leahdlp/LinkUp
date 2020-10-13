import {
    RECEIVE_GROUPS,
    RECEIVE_GROUP,
    REMOVE_GROUP
} from '../../actions/groups_actions';
import { RECEIVE_SEARCH, CLEAR_SEARCH } from '../../actions/search_actions';

const groupsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_GROUPS:
            return action.groups;
        case RECEIVE_GROUP:
            nextState[action.group.id] = action.group;
            return nextState;
        case REMOVE_GROUP:
            delete nextState[action.groupId];
            return nextState;
        case RECEIVE_SEARCH:
            let results = action.results.groups

            if (!results) {
                return nextState;
            } else if (action.results.subcategories) {
                results = Object.assign(results, action.results.subcategories.groups);
            }
            
            return results;
        case CLEAR_SEARCH:
            return {};
        default:
            return oldState;
    }
}

export default groupsReducer;