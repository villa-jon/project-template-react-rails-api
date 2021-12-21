class Resident < ApplicationRecord
	has_secure_password
	has_many :reviews

	validates :name, presence: true, uniqueness: true 
	validates :password,
		length: { minimum: 6 },
		if: -> { new_record? || !password.nil? }
end
