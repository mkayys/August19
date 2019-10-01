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
            
        else
            render json: ['yo, wrong info'], status: 401
        end
    end

    def destroy

    end
end
