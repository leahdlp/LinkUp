import * as MemberAPIUtil from '../util/members_api_util';

export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS'
export const RECEIVE_MEMBER = 'RECEIVE_MEMBER';
export const REMOVE_MEMBER = 'REMOVE_MEMBER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS"

const receiveMembers = members => ({
    type: RECEIVE_MEMBERS,
    members
})

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

export const fetchMembers = groupId => dispatch => (
    MemberAPIUtil.fetchMembers(groupId)
        .then(members => dispatch(receiveMembers(members)))
)

export const fetchMember = memberId => dispatch => (
    MemberAPIUtil.fetchMember(memberId)
        .then(member => dispatch(receiveMember(member)))
        .fail(errors => dispatch(receiveAttendeeErrors(errors.responseJSON)))
)

export const createMember = groupId => dispatch => (
    MemberAPIUtil.createMember(groupId)
        .then(groupInfo => dispatch(receiveMember(groupInfo)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const deleteMember = memberId => dispatch => (
    MemberAPIUtil.deleteMember(memberId)
        .then(member => dispatch(removeMember(member.id)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)