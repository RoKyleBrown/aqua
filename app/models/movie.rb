class Movie < ApplicationRecord
    validates :title, :description, :imageUrl, presence: true

    # belongs_to :user,
    # foreign_key: :user_id,
    # class_name: :User 

end
