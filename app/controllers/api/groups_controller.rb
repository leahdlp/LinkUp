# == Schema Information
#
# Table name: groups
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  description    :text             not null
#  category_id    :integer          not null
#  subcategory_id :integer          not null
#  location_id    :integer          not null
#  creator_id     :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Api::GroupsController < ApplicationController
    def index
        @group = Group.all
        render :index
    end

    def create
        @group = Group.new(group_params)

        if @group.save
            render "/api/groups/show"
        else
            render json: @group.errors.full_messages, status: 404
        end
    end

    def update
        @group.find_by(id: params[:id])

        if @group
            @group.update(group_params)
            render "/api/groups/show"
        else
            render json: ["Group not found"], status: 404
        end
    end

    def destroy
        @group.find_by(id: params[:id])

        if @group
            @group.destroy!
            render "/api/groups/index"
        else
            render json: ["Group not found"], status: 404
        end
    end

    private
    def group_params
        params.require(:group).permit(:name, :description, :subcategory_id, :location_id)
    end
end
