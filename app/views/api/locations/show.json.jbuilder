json.partial! '/api/locations/location', location: @location

# @location.groups.each do |location|
#     json.set! location.id do 
#         json.partial! '/api/locations/show', location: location
#     end
# end