json.extract! group, :id, :name, :description, :subcategory_id, :location_id, :creator_id, :member_ids, :event_ids
json.creator group.creator.name
json.location group.location
json.subcategory group.subcategory.name
json.photoUrl url_for(group.photo)