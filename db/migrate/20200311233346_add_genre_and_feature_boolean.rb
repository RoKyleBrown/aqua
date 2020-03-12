class AddGenreAndFeatureBoolean < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :feature, :boolean
    add_column :movies, :top_feature, :boolean
    add_column :movies, :genre, :string
    add_column :movies, :rating, :integer
  end
end
