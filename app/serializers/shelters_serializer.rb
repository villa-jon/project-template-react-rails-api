class SheltersSerializer < ActiveModel::Serializer
  attributes :id, :address, :rating, :description, :name, :url
  # has one :review

end
