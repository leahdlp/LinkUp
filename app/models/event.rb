# == Schema Information
#
# Table name: events
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  group_id    :integer          not null
#  date_time   :datetime         not null
#  location_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text             not null
#
class Event < ApplicationRecord
    validates :name, :group_id, :date_time, :location_id, :description, presence: true
    validates :group_id, uniqueness: { scope: [:date_time, :location_id] }

    belongs_to :group,
        foreign_key: :group_id,
        class_name: :Group

    belongs_to :location,
        foreign_key: :location_id,
        class_name: :Location

    has_many :attendees,
        foreign_key: :event_id,
        class_name: :Attendee,
        dependent: :destroy    
end
