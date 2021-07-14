class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :private, :username, :user_id
  has_many :comments
end
