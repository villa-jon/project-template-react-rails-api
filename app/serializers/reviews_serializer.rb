class ReviewsSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment
  belongs_to :shelters

  
end
