export const fetchEvents = () => (
    $.ajax({
        url: `/api/events`,
        method: 'GET'
    })
)

export const fetchEvent = eventId => (
    $.ajax({
        url: `/api/events/${eventId}`,
        method: 'GET'
    })
)

export const createEvent = event => (
    $.ajax({
        url: `/api/groups/${event.group_id}/events`,
        method: 'POST',
        data: { event },
        contentType: false,
        processData: false
    })
)

export const updateEvent = event => (
    $.ajax({
        url: `/api/events/${event.id}`,
        method: 'PATCH',
        data: { event },
        contentType: false,
        processData: false
    })
)

export const deleteEvent = eventId => (
    $.ajax({
        url: `/api/events/${eventId}`,
        method: 'DELETE'
    })
)
