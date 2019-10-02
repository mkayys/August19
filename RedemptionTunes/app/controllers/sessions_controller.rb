class SessionsController < ApplicationController

    def new
        render :new
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login(@user)
            redirect_to user_url(@user.id)
        else
            render json: ['yo, wrong info'], status: 401
        end
    end

    def destroy

    end
end
