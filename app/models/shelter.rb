class Shelter < ApplicationRecord
	has_many :reviews 
	has_many :residents

	validates :name, presence: true, uniqueness: true 
	validates :description, length: { maximum: 250 }

end
