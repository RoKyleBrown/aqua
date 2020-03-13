class AddVideoCol < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :video, :string
  end
end
