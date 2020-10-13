export const RECIEVE_KEYWORD = 'RECEIVE_KEYWORD';

const recieve_keyword = keyword => ({
    type: RECIEVE_KEYWORD,
    keyword
})

export const setKeyword = keyword => dispatch => (
    dispatch(recieve_keyword(keyword))
)