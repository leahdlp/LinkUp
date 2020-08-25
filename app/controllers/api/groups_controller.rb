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
    before_action :require_logged_in, except: [:index, :show]

    def index
        @groups = Group.all
        render "/api/groups/index"
    end

    def show
        # debugger
        @group = Group.find_by(id: params[:id])
        render "/api/groups/show"
    end

    def create
        @group = Group.new(group_params)
        @group.creator_id = current_user.id
        Member.create({ group_id: @group.id, user_id: current_user.id })

        debugger

        if @group.save
            render "/api/groups/show"
        else
            render json: @group.errors.full_messages, status: 404
        end
    end

    def update
        @group = Group.find_by(id: params[:id])

        if @group.creator_id === current_user.id && @group.update(group_params)
            render "/api/groups/show"
        else
            render json: ["Could not update, group not found"], status: 404
        end
    end

    def destroy
        @group = Group.find_by(id: params[:id])

        if @group.creator_id === current_user.id
            @group.destroy!
            render json: "/api/groups/show"
        else
            render json: ["Could not destroy, group not found"], status: 404
        end
    end

    private
    def group_params
        params.require(:group).permit(
            :name, 
            :description, 
            :subcategory_id, 
            :location_id
        )
    end
end
