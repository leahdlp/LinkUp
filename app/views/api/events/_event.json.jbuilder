json.extract! event, :id, :name, :description, :group_id, :date_time, :location_id, :attendee_ids
json.host event.group.creator.name
json.hostPhoto url_for(event.group.creator.photo)
json.location event.location
json.group event.group.name
json.photoUrl url_for(event.photo)