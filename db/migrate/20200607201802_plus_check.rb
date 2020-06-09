class PlusCheck < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :plus_check, :string
  end
end
