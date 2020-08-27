# == Schema Information
#
# Table name: attendees
#
#  id         :bigint           not null, primary key
#  event_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Attendee < ApplicationRecord
    validates :event_id, :user_id, presence: true
    validates :event_id, uniqueness: { scope: :user_id }

    belongs_to :event,
        foreign_key: :event_id,
        class_name: :Event

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
