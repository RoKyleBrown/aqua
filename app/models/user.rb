class User < ApplicationRecord
    #aSpire
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, :first_name, presence: true 
    validates  :password, length: { minimum: 6 , allow_nil: true }
    after_initialize :ensure_session_token

    attr_reader :password

    # has_many :movies,
    #     foreign_key: :user_id,
    #     class_name: :Movie

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        return nil if @user.nil?
        (@user.is_password?(password) ? @user : nil)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end
end
