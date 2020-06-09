class MsgCol < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :current_msg, :string
  end
end
