json.set! @group.id do
    json.partial! '/api/groups/group', group: @group
end

json.members do
    @group.members.each do |member|
        json.set! member.id do
            json.partial! 'api/members/member', member: member
            # json.member member.user.name
        end
    end
end