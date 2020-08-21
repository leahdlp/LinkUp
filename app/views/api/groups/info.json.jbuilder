json.set! @group.id do
    json.extract! @group, :id, :name, :description, :location_id, :member_ids # => array of transaction ids through has_many association
end

json.members do
    @group.members.each do |member|
        json.set! member.id do
            json.extract! member, :id, :group_id, :user_id # => belongs_to association
            json.member member.user.username
        end
    end
end