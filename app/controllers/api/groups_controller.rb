class Api::GroupsController < ApplicationController
    before_action :require_logged_in, except: [:index, :show]
    
    def index
        @groups = Group.all
        render "/api/groups/index" 
    end

    def show
        @group = Group.find_by(id: params[:id])
        render "/api/groups/show"
    end

    def create
        @group = Group.new(group_params)
        @group.creator_id = current_user.id
        
        if @group.save
            Member.create({ group_id: @group.id, user_id: current_user.id })
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
            render "/api/groups/show"
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
            :location_id,
            :photo
        )
    end
end
