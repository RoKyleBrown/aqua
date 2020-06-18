class HashUserColumnUpdate < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :minus_check
  end
end
