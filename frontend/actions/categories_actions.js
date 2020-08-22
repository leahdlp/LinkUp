import * as CategoryAPIUtil from '../util/categories_api_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

const receiveCategories = categories => ({
    type: RECEIVE_CATEGORIES,
    categories
})

const receiveCategory = category => ({
    type: RECEIVE_CATEGORY,
    category
})

export const fetchCategories = () => dispatch => (
    CategoryAPIUtil.fetchCategories()
        .then(categories => dispatch(receiveCategories(categories)))
)

export const fetchCategory = categoryId => dispatch => (
    CategoryAPIUtil.fetchCategory(categoryId)
        .then(category => dispatch(receiveCategory(category)))
)
