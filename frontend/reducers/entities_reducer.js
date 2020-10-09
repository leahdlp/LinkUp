import { combineReducers } from 'redux';
import usersReducer from './users/users_reducer';
import groupsReducer from './groups/groups_reducer';
import membersReducer from './members/members_reducer';
import categoriesReducer from './categories/categories_reducer';
import subcategoriesReducer from './subcategories/subcategories_reducer';
import locationsReducer from './locations/locations_reducer';
import eventsReducer from './events/events_reducer';
import attendeesReducer from './attendees/attendees_reducer';
import keywordReducer from './keyword/keyword_reducer';

const entitiesReducers = combineReducers({
    users: usersReducer,
    groups: groupsReducer,
    members: membersReducer,
    categories: categoriesReducer,
    subCategories: subcategoriesReducer,
    locations: locationsReducer,
    events: eventsReducer,
    attendees: attendeesReducer,
    keyword: keywordReducer
})

export default entitiesReducers;