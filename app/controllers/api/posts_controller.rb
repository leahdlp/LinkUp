class Api::PostsController < ApplicationController 
    def show
        @post = Post.find_by(id: params[:id])
        render :show
    end
end