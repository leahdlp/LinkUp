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
require 'test_helper'

class GroupTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
