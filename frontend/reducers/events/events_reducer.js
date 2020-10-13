import { 
    RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT 
} from '../../actions/events_actions';
import { RECEIVE_SEARCH, CLEAR_SEARCH } from '../../actions/search_actions';

const eventsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_EVENTS:
            return Object.assign({}, action.events);
        case RECEIVE_EVENT:
            nextState[action.event.id] = action.event;
            return nextState;
        case REMOVE_EVENT:
            delete nextState[action.eventId]; 
            return nextState;
        case RECEIVE_SEARCH: 
            let results = action.results.events

            if (!results) {
                return nextState;
            } else if (action.subcategories) {
                results = Object.assign(results, action.results.subcategories.events)
            }
            
            return results;
        case CLEAR_SEARCH:
            return {};
        default:
            return oldState;
    }
}

export default eventsReducer;