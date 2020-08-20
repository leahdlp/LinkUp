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
#  updated_at     :datetime         not null
#
class Group < ApplicationRecord

    belongs_to :category,
        foreign_key: :category_id,
        class_name: :Category

    belongs_to :subcategory,
        foreign_key: :subcategory_id,
        class_name: :Subcategory

    belongs_to :location,
        foreign_key: :location_id,
        class_name: :Location

    has_many :members,
        foreign_key: :group_id,
        class_name: :Member 
end
