class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :username
  belongs_to :post_id
  belongs_to :user_id
end
