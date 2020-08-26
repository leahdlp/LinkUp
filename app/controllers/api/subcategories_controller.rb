class Api::SubcategoriesController < ApplicationController
    def index 
        @subcategories = Subcategory.all
        render :index
    end

    def show
        @subcategory = Subcategory.find_by(id: params[:id])
        render :show
    end
end
