class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :experience, :location, :ask_salary, :current_position, :desired_job_title
  # has_many :posts
end
