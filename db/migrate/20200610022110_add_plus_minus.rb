class AddPlusMinus < ActiveRecord::Migration[5.2]
  def change
    add_column  :movies, :plus_minus, :string 
  end
end
