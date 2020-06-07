class SelectedMoviesTest2 < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :selected_movies, :integer
  end
end
