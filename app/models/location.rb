# == Schema Information
#
# Table name: locations
#
#  id         :bigint           not null, primary key
#  city       :string           not null
#  state      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Location < ApplicationRecord
    validates :city, :state, presence: true
    validates :city, uniqueness: { scope: :state }

    # has_many :groups,
    #     foreign_key: :location_id,
    #     class_name: :Group
end
