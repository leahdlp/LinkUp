export const fetchAttendees = eventId => (
    $.ajax({
        url: `/api/events/${eventId}/attendees`,
        method: 'GET'
    })
)

export const fetchAttendee = attendeeId => (
    $.ajax({
        url: `/api/attendees/${attendeeId}`,
        method: 'GET'
    })
)

export const createAttendee = attendee => (
    $.ajax({
        url: `/api/attendees`,
        method: 'POST',
        data: { attendee }
    })
)

export const deleteAttendee = attendeeId => (
    $.ajax({
        url: `/api/attendees/${attendeeId}`,
        method: 'DELETE'
    })
)