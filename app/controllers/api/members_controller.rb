class Api::MembersController < ApplicationController
    def create
        debugger
        @member = Member.new(member_params)
        @member.user_id = current_user.id

        if @member.save
            render json: ['member created'], status: 200
        else
            render json: ['Cannot create member'], status: 422
        end
    end

    def destroy
        @member = Member.find_by(id: current_user.id)

        if @member.group_id === params[:group_id]
            @member.destroy
            render json: ['member destroyed']
        else
            render json: ['Member couldnt be destroyed'], status: 422
        end
    end

    private
    def member_params
        params.require(:member).permit(:group_id)
    end
end
