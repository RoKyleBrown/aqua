class ChangeArrayType2 < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :selected_vids, :string, array: true, default: []
  end
end
