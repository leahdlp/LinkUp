# == Schema Information
#
# Table name: subcategories
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Subcategory < ApplicationRecord
    validates :name, :category_id, presence: true
    validates :name, uniqueness: { scope: :category_id }
    
    belongs_to :category,
        foreign_key: :category_id,
        class_name: :Category

    has_many :groups,
        foreign_key: :subcategory_id,
        class_name: :Group
end
