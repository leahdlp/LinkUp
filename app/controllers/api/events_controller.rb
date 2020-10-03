class Api::EventsController < ApplicationController
    def index
        @events = Event.all
        render '/api/events/index'
    end

    def show
        @event = Event.find_by(id: params[:id])
        render :show
    end

    def create
        @event = Event.new(event_params)
        @event.date_time = DateTime.parse(params[:event][:date_time]);
        creator_id = @event.group.creator_id

        if creator_id != current_user.id
            render json: ["Event can only be created by group admin"], status: 422
        elsif @event.save
            Attendee.create!({ event_id: @event.id, user_id: current_user.id })
            render '/api/events/show'
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def update
        @event = Event.find_by(id: params[:id])
        creator_id = @event.group.creator_id


        if creator_id != current_user.id
            render json: ["Event can only be updated by its creator"], status: 422
        elsif @event
            @event.update(event_params)
            render '/api/events/show'
        else
            render json: ["Could not update, event not found"], status: 404
        end
    end

    def destroy
        @event = Event.find_by(id: params[:id])
        creator_id = @event.group.creator_id

        if creator_id != current_user.id
            render json: ["Event can only be destroyed by its creator"], status: 422
        elsif @event.destroy
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
