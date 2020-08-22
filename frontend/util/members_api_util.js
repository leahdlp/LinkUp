export const fetchMembers = groupId => (
    $.ajax({
        url: `/api/groups/${groupId}/members`,
        method: 'GET'
    })
)

export const createMember = groupId => (
    $.ajax({
        url: `/api/members`,
        method: 'POST',
        data: { member: { group_id: groupId } }
    })
)

export const deleteMember = memberId => (
    $.ajax({
        url: `/api/members/${memberId}`,
        method: 'DELETE'
    })
)