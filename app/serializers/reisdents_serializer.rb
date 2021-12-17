class ReisdentsSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest, :age, :email
end
