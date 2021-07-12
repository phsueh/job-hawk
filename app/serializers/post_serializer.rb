class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :private
  has_many :comments
end
