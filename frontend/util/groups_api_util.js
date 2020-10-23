export const fetchGroups = () => (
    $.ajax({
        url: `/api/groups`,
        method: 'GET'
    })
)

export const fetchGroup = groupId => (
    $.ajax({
        url: `/api/groups/${groupId}`,
        method: 'GET'
    })
)

export const createGroup = group => (
    $.ajax({
        url: `/api/groups`,
        method: 'POST',
        data: group,
        contentType: false,
        processData: false
    })
)

export const updateGroup = group => (
    $.ajax({
        url: `/api/groups/${group.id}`,
        method: 'PATCH',
        data: group,
        contentType: false,
        processData: false
    })
)

export const deleteGroup = groupId => (
    $.ajax({
        url: `/api/groups/${groupId}`,
        method: 'DELETE'
    })
)
