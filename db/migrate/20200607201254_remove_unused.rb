class RemoveUnused < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :selected_vids
    remove_column :users, :test
  end
end
