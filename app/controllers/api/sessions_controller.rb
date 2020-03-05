class Api::SessionsController < ApplicationController
    #create, destroy

    def create
      @user = User.find_by_credentials(params[:user][:email], 
        params[:user][:password])
         if @user
            log_in!(@user)
            render json: "signed in"
            #movie index
         else
            render json: ["invalid password or username"], status: 401
            #error message, invalid password or username
            #render modal
         end
    end

    def destroy

        if current_user
            log_out!
            render json: {}
            #redirect to signin page or render modal
        else
        render json: "not signed in", status: 404
        end
    end
end
