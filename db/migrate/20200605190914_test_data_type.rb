class TestDataType < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :test, :string
  end
end
