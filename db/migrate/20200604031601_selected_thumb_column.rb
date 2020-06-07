class SelectedThumbColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :selected_thumb, :string
  end
end
