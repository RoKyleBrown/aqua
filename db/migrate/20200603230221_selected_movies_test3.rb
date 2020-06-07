class SelectedMoviesTest3 < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :selected_movies, :integer
  end
end
