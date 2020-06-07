class SelectedMoviesTest < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :selected_movies
  end
end
