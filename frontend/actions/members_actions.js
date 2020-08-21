import * as MemberAPIUtil from '../util/members_api_util';

export const RECEIVE_MEMBER = 'RECEIVE_MEMBER';
export const REMOVE_MEMBER = 'LOGOUT_MEMBER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS"

const receiveMember = member => ({
    type: RECEIVE_MEMBER,
    member
})

const removeMember = memberId => ({
    type: REMOVE_MEMBER,
    memberId
})

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors

})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})


export const createMember = member => dispatch => (
    MemberAPIUtil.createMember(member)
        .then(member => dispatch(receiveMember(member)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const deleteMember = memberId => dispatch => (
    MemberAPIUtil.deleteMember(memberId)
        .then(member => dispatch(removeMember(member.id)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)