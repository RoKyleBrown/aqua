class ChangeArrayType < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :selected_vids, :integer, array: true, default: []
  end
end
