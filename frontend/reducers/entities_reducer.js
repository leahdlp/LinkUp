import { combineReducers } from 'redux';
import usersReducer from './users/users_reducer';
import groupsReducer from './groups/groups_reducer';

const entitiesReducers = combineReducers({
    users: usersReducer,
    groups: groupsReducer
})

export default entitiesReducers;