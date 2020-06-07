class SelectedMoviesTest4 < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :selected_movies, :string
  end
end
