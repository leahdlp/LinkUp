class Api::SearchController < ApplicationController
    def index
        # debugger
        if params[:keyword].nil?
            @events = Event.all;
            @groups = Group.all;
            subcats = Subcategory.all;
            @subcats = { groups: [], events: [] }
        else
            @events = Event.where("lower(name) LIKE ?", "%" + params[:keyword] + "%")
            @groups = Group.where("lower(name) LIKE ?", "%" + params[:keyword] + "%")
            subcats = Subcategory.where("lower(name) LIKE ?", "%" + params[:keyword] + "%")
            @subcats = { groups: [], events: [] }
        end

        # debugger
        # @groups = @groups.to_a()

        # @events.each do |event|
            # @groups.concat(event.group)
        # end

        subcats.each do |subcat|
            @subcats[:groups].concat(subcat.groups)
        end

        @subcats[:groups].each do |subcat| 
            @subcats[:events].concat(subcat.events)
        end

        @results = { events: @events, groups: @groups, subcats: @subcats }
        render '/api/search/index'
    end

    def search_params
        params.permit(:keyword)
    end
end