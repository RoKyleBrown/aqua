class SelectedMoviesArrayDefault < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :selected_movies, :integer, array: true, default: '{}'
  end
end
