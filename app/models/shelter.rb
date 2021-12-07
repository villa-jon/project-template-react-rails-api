class Shelter < ApplicationRecord
	has_many: reviews 
	has_many: residents
end
