class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logged_in?
        !current_user.nil?
    end
    
    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def require_logged_in
        render json: ["Must be logged in to perform this action"], status: 422 unless logged_in?
    end

    def require_logged_out
        render json: ["Must be logged out to perform this action"], status: 422 if logged_in?
    end
end
