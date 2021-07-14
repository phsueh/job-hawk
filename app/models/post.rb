class Post < ApplicationRecord
  belongs_to :user
  has_many :comments

  def username
    self.user.username
  end
end
