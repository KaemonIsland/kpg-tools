class User < ApplicationRecord
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

    validates :name, presence: true, length: { maximum: 20 }

    validates :email, presence: true, uniqueness: { case_sensitive: false }, length: {maximum: 50}, format: { with: VALID_EMAIL_REGEX }
    
    has_secure_password
end
