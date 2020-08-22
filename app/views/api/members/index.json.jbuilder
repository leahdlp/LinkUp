@members.each do |member|
    json.set! member.id do
        json.partial! '/api/members/member', member: member
    end
end