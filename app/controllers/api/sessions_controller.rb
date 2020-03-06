class Api::SessionsController < ApplicationController
    #create, destroy

    def create
      @user = User.find_by_credentials(params[:user][:email], 
        params[:user][:password])
         if @user
            log_in!(@user)
            render "api/users/show"
            #movie index
         else
            render json: ["Invalid username/password combination"], status: 401 
            #error message, invalid password or username
            #render modal
         end
    end

    def destroy
        @user = current_user
        if @user
            log_out!
            render "api/users/show"
            #redirect to signin page or render modal
        else
        render json: ["not signed in"], status: 404
        end
    end
end
