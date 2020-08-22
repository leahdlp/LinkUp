json.partial! '/api/locations/location', location: @location

@location.groups.each do |group|
    json.set! group.id do 
        json.partial! '/api/groups/show'
    end
end