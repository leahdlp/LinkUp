import * as GroupAPIUtil from '../util/groups_api_util';

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const REMOVE_GROUP = 'REMOVE_GROUP';
export const RECEIVE_GROUP_ERRORS = 'RECEIVE_GROUP_ERRORS';
export const CLEAR_GROUP_ERRORS = 'CLEAR_GROUP_ERRORS';

const receiveGroups = groups => ({
    type: RECEIVE_GROUPS,
    groups
})

const receiveGroup = group => ({
    type: RECEIVE_GROUP,
    group
})

const removeGroup = groupId => ({
    type: REMOVE_GROUP,
    groupId
})

const receiveGroupErrors = errors => ({
    type: RECEIVE_GROUP_ERRORS,
    errors
})

export const clearGroupErrors = () => ({
    type: CLEAR_GROUP_ERRORS
})


export const fetchGroups = () => dispatch => (
    GroupAPIUtil.fetchGroups()
        .then(groups => dispatch(receiveGroups(groups)))
        .fail(errors => dispatch(receiveGroupErrors(errors.responseJSON)))

)

export const fetchGroup = groupId => dispatch => (
    GroupAPIUtil.fetchGroup(groupId)
        .then(group => dispatch(receiveGroup(group)))
        .fail(errors => dispatch(receiveGroupErrors(errors.responseJSON)))
)

export const createGroup = group => dispatch => (
    GroupAPIUtil.createGroup(group)
        .then(group => dispatch(receiveGroup(group)))
        .fail(errors => dispatch(receiveGroupErrors(errors.responseJSON)))
)

export const updateGroup = group => dispatch => (
    GroupAPIUtil.updateGroup(group)
        .then(group => dispatch(receiveGroup(group)))
        .fail(errors => dispatch(receiveGroupErrors(errors.responseJSON)))
)

export const deleteGroup = groupId => dispatch => (
    GroupAPIUtil.deleteGroup(groupId)
    .then(groupId => dispatch(removeGroup(groupId)))
    .fail(errors => dispatch(receiveGroupErrors(errors)))
)
