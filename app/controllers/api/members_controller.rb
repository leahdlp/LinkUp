class Api::MembersController < ApplicationController
    def index
        # debugger
        @members = Group.find_by(id: params[:group_id]).members
        render :index
    end 

    def create
        debugger
        @member = Member.new(member_params)
        @member.user_id = current_user.id

        if @member.save
            render "/api/member/info"
        else
            render json: ['Cannot create member'], status: 422
        end
    end

    def destroy
        @member = Group.find_by(id: params[group_id]).members.find_by(id: current_user.id)

        if @member.destroy
            render "/api/member/info"

        else
            render json: ['Member couldnt be destroyed'], status: 422
        end
    end

    private
    def member_params
        params.require(:member).permit(:group_id)
    end
end
