class Api::MoviesController < ApplicationController
    #index
    #create
    #show

    def index
        @movies = Movie.all
    end

    def show
        @movie = Movie.find(params[:id])
    end

    def create
        @movie = Movie.new(movie_params)
        debugger
            if @movie.save
            render :show
            else
            render json: @event.errors.full_messages, status: 422
    end
  end

    private

    def movie_params
        params.require(:movie).permit(
            :title,
            :description 
        )

    end
end
