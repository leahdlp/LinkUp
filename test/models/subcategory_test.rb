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
require 'test_helper'

class SubcategoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
