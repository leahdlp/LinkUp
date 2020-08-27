export const fetchAttendees = eventId => (
    $.ajax({
        url: `/api/events/${eventId}/attendees`,
        method: 'GET'
    })
)

export const createAttendee = eventId => (
    $.ajax({
        url: `/api/attendees`,
        method: 'POST',
        data: { attendee: { event_id: eventId } }
    })
)

export const deleteAttendee = attendeeId => (
    $.ajax({
        url: `/api/attendees/${attendeeId}`,
        method: 'DELETE'
    })
)