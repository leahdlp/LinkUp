json.events do 
    @events.each do |event| 
        json.set! event.id do 
            json.partial! '/api/events/event', event: event
            json.group event.group.name
        end
    end
end

json.groups do 
    @groups.each do |group| 
        json.set! group.id do 
            json.partial! '/api/groups/group', group: group
        end
    end
end

json.subcategories do 
    json.groups do 
        @subcats[:groups].each do |group| 
            json.set! group.id do 
                json.partial! '/api/groups/group', group: group
            end
        end
    end
        
    json.events do 
        @subcats[:events].each do |event| 
            json.set! event.id do 
                json.partial! '/api/events/event', event: event
                json.group event.group.name
            end
        end
    end
end