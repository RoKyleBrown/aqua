class Api::UsersController < ApplicationController
    def create
        @user = User.create(user_params)
        
        if @user.save
            #movies index
            render json: "Signed in"
        else
            render json: "invalid username or password"
            #back to sign-up page
        end

    end

    private

    def user_params
       params.require(:user).permit(:email, :password) 
    end
end
