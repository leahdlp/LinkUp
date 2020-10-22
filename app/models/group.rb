# == Schema Information
#
# Table name: groups
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  description    :text             not null
#  subcategory_id :integer          not null
#  location_id    :integer          not null
#  creator_id     :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null #
class Group < ApplicationRecord
    validates :name, :description, :creator_id, :location_id, :subcategory_id, presence: true 
    validates :name, uniqueness: { scope: :description }
    validates :name, uniqueness: { scope: :creator_id }
    validates :name, uniqueness: { scope: :location_id }
    validates :name, uniqueness: { scope: :subcategory_id }

    belongs_to :subcategory,
        foreign_key: :subcategory_id,
        class_name: :Subcategory

    belongs_to :location,
        foreign_key: :location_id,
        class_name: :Location

    belongs_to :creator,
        foreign_key: :creator_id,
        class_name: :User

    has_many :members,
        foreign_key: :group_id,
        class_name: :Member,
        dependent: :destroy

    has_many :categories,
        through: :subcategory,
        source: :category

    has_many :events,
        foreign_key: :group_id,
        class_name: :Event,
        dependent: :destroy

    has_many :users,
        through: :members,
        source: :user

    has_one_attached :photo

    # def ensure_phoo 
    #     unless self.photo.attached?
    #         errors[:photo] << "Must have picture for group"
    #     end
    # end
end
