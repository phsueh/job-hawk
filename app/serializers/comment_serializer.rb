class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :username, :user_id
  belongs_to :post_id
  belongs_to :user_id
end
