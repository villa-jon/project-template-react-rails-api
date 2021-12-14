class Shelter < ApplicationRecord
	has_many :reviews 
	has_many :residents

	validates :name, presence: true, uniqueness: true 
	validates :description, length: { minimum: 250 }
 
end
