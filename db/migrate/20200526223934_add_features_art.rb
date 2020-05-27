class AddFeaturesArt < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :screenshot, :string
    add_column :movies, :thumb_hover, :string
  end
end
