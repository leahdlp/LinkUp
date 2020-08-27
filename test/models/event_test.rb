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
require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
