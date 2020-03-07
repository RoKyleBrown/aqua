class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :description, null: false, unique: true
      t.string :awsConnect
      t.string :imageUrl, null: false
      t.integer :user_id 

      t.timestamps
    end
    add_index :movies, :user_id
  end
end