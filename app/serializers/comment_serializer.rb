class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_one :post_id
end
