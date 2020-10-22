json.extract! attendee, :id, :event_id, :user_id
json.name attendee.user.name
json.photoUrl url_for(attendee.user.photo)