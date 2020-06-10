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
            if @movie.save
            render :show
            else
            render json: @event.errors.full_messages, status: 422
    end
  end

    def update
        @movie = Movie.find(params[:id])
        if @movie.update(movie_params)
            render "api/movies/show"
        else
            render json: @movie.errors.full_messages, status: 422
        end
    end

    private

    def movie_params
        params.require(:movie).permit(
            :title,
            :description,
            :feature,
            :top_feature,
            :video,
            :plus_check,
            :current_msg,
            :plus_minus
        )

    end
end
