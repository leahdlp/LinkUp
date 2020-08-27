@attendees.each do |attendee|
    json.set! attendee.id do
        json.partial! '/api/attendees/attendee', attendee: attendee
    end
end