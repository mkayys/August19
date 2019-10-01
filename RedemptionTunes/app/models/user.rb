# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :email, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true

    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password

    def self.find_by_credentials(email, pw)
        
    end
end
