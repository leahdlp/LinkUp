class Api::SessionsController < ApplicationController
    def create
        debugger
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user
            login!(@user)
            render "/api/users/show"
        else
            render json: ["Your email or password was entered incorrectly."], status: 422
        end
    end

    def destroy
        logout!
        render json: ["logged out!"]
    end
end