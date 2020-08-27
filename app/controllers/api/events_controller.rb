class Api::EventsController < ApplicationController
    def index
        @events = Event.all
        render :index
    end

    def show
        @event = Event.find_by(id: params[:id])
        render :show
    end

    def create
        @event = Event.new(event_params)

        if @member.save
            render '/api/events/show'
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def destroy
        @event = Event.find_by(id: params[:id])

        if @event.destroy
            render '/api/events/show'
        else
            render json: ['Event could not be destroyed'], status: 422
        end
    end

    private
    def event_params
        params.require(:event).permit(
            :name, 
            :description,
            :group_id, 
            :date_time, 
            :location_id
        )
    end
end
