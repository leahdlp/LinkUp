import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const receiveSearch = results => ({
    type: RECEIVE_SEARCH,
    results
})

export const clearSearch = () => ({
  type: CLEAR_SEARCH
})


export const searchEntities = keyword => dispatch => (
  SearchAPIUtil.searchEntities(keyword)
    .then(results => {
      if (!results.events && !results.groups && !results.subcategories) {
          dispatch(clearSearch())
      } else {
          dispatch(receiveSearch(results))
      }
    })
)
