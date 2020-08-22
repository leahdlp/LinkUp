import { 
    RECEIVE_SUBCATEGORIES, 
    RECEIVE_SUBCATEGORY 
} from '../../actions/subcategories_actions';

const subcategoriesReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_SUBCATEGORIES:
            return action.categories;
        case RECEIVE_SUBCATEGORY:
            nextState[action.category.id] = action.category;
            return nextState;
        default:
            return oldState;
    }
}

export default subcategoriesReducer;