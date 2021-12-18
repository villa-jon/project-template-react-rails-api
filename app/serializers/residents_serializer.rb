class ResidentsSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest, :age, :email
end
