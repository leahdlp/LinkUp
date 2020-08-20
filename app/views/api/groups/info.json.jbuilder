json.group do
    json.extract! @group, :id, :name, :description, location_id:, :member_ids # => array of transaction ids through has_many association
end

json.members do
    @group.members.each do |member|
        json.set! member.id do
            json.extract! member, :id, :quantity, :created_at, :tea_id # => belongs_to association
            json.member member.user.username
        end
    end
end