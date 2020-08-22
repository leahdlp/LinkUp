import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY } from '../../actions/categories_actions';

const categoriesReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return action.categories;
        case RECEIVE_CATEGORY:
            nextState[action.category.id] = action.category;
            return nextState;
        default:
            return oldState;
    }
}

export default categoriesReducer;