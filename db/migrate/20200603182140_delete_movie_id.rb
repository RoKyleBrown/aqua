class DeleteMovieId < ActiveRecord::Migration[5.2]
  def change
     remove_column :users, :movie_id
  end
end
