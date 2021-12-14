class Review < ApplicationRecord
	has_many :shelters
	belongs_to :resident
end
