class Api::MembersController < ApplicationController
    def index
        @members = Group.find_by(id: params[:group_id]).members
        render :index
    end 

    def show
        @member = Member.find_by(id: params[:id])
        render "/api/members/info"
    end

    def create
        @member = Member.new(member_params)
        @member.user_id = current_user.id

        if @member.save
            render "/api/members/info"
        else
            render json: ['Cannot create member'], status: 422
        end
    end

    def destroy
        @member = Member.find_by(id: params[:id])

        if @member.destroy
            render "/api/members/info"

        else
            render json: ['Member couldnt be destroyed'], status: 422
        end
    end

    private
    def member_params
        params.require(:member).permit(:group_id)
    end
end
