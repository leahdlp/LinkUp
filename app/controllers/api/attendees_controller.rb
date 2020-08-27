class Api::AttendeesController < ApplicationController
    def index
        @attendees = Attendee.all
        render :index
    end

    def create
        @attendee = Attendee.new(attendee_params)
        @attendee.user_id = current_user.id

        if @attendee.save
            render "/api/attendees/info"
        else
            render json: @attendee.errors.full_messages, status: 422
        end
    end

    def destroy
        @attendee = Attendee.find_by(id: params[:id])

        if @attendee.destroy
            render "/api/attendees/info"
        else
            render json: ['Attendee could not be destroyed'], status: 422
        end
    end

    private
    def attendee_params
        params.require(:attendee).permit(:event_id)
    end
end
