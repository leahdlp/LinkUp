# == Schema Information
#
# Table name: members
#
#  id         :bigint           not null, primary key
#  group_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Member < ApplicationRecord
    validates :group_id, :user_id, presence: true
    validates :user_id, uniqueness: { scope: :group_id }

    belongs_to :group,
        foreign_key: :group_id,
        class_name: :Group

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    # has_one_attached :photo
end
