import { RECIEVE_KEYWORD } from '../../actions/keyword_action';

const KeywordReducer = (oldState="", action) => {
    Object.freeze(oldState);
    
    switch (action.type) {
        case RECIEVE_KEYWORD:
            return action.keyword;
        default:
            return oldState;
    }
}

export default KeywordReducer;