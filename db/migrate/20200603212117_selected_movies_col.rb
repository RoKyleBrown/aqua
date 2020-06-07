class SelectedMoviesCol < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :selected_movies, :integer, array: true, default: []
  end
end
