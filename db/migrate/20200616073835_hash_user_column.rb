class HashUserColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :minus_check, :text
  end
end
