class Api::MoviesController < ApplicationController
    #index
    #create
    #show

    def index
        @movies = Movie.all
    end
end
