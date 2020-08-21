export const createMember = member => (
    $.ajax({
        url: `/api/members`,
        method: 'POST',
        data: { member }
    })
)

export const deleteMember = memberId => (
    $.ajax({
        url: `/api/members/${memberId}`,
        method: 'DELETE'
    })
)