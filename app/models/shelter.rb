class Shelter < ApplicationRecord
	has_many :reviews 
	has_many :residents

	validates :name, presence: true, uniqueness: true 
	validates :description, length: { maximum: 250 }

	# def self.most_reviews
	# 	# has to find a review for shelter
	# 	self.reviews = Reviews.find_by[params[:id]]
	# end 

end
