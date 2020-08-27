import { combineReducers } from 'redux';
import sessionErrorsReducer from './session/session_errors_reducer';
import groupErrorsReducer from './groups/groups_errors_reducer';
import eventErrorsReducer from './events/events_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    groups: groupErrorsReducer,
    events: eventErrorsReducer
})

export default errorsReducer