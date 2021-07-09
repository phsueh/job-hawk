class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :private
  has_one :user_id
end
