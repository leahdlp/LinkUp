import * as SubcategoryAPIUtil from '../util/subcategories_api_util';

import { receiveEvents } from './events_actions';
import { receiveGroups } from './groups_actions';

export const RECEIVE_SUBCATEGORIES = 'RECEIVE_SUBCATEGORIES';
export const RECEIVE_SUBCATEGORY = 'RECEIVE_SUBCATEGORY';

const receiveSubcategories = subcategories => ({
    type: RECEIVE_SUBCATEGORIES,
    subcategories
})

const receiveSubcategory = subcategory => ({
    type: RECEIVE_SUBCATEGORY,
    subcategory
})


export const fetchSubcategories = () => dispatch => (
    SubcategoryAPIUtil.fetchSubcategories()
        .then(subcategories => dispatch(receiveSubcategories(subcategories)))
)

export const fetchSubcategory = subcategoryId => dispatch => (
    SubcategoryAPIUtil.fetchSubcategory(subcategoryId)
        .then(subcategory => dispatch(receiveSubcategory(subcategory)))
)
