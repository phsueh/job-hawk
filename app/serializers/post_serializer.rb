class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :private, :username
  has_many :comments
end
