class NestedObj < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :movie_id, :string
  end
end
