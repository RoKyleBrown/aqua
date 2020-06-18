class AddObjUserColumn < ActiveRecord::Migration[5.2]
  def change
   add_column  :users, :minus_check, :json, default: {}
  end
end
