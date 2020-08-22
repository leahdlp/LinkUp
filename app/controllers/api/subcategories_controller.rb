class Api::SubcategoriesController < ApplicationController
    def index 
        @subcategories = Subcategory.all
        render :index
    end
end
