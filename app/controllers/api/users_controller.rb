class Api::UsersController < ApplicationController
    def create
        @user = User.create(user_params)
        if @user.save
            #movies index
            log_in!(@user)
            render "api/users/show"
        else
             render json: @user.errors.full_messages, status: 422
        end

    end

    def update
        @user= current_user
        if @user.update(user_params)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end


    private

    def user_params
       params.require(:user).permit(:email, :first_name, :last_name).tap do|whitelisted|
            whitelisted[:selected_movies] = params[:user][:selected_movies]
       end 
    end
end
