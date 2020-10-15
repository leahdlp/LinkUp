json.extract! event, :id, :name, :description, :group_id, :date_time, :location_id, :attendee_ids
json.host event.group.creator.name
json.location event.location
json.group event.group.name
