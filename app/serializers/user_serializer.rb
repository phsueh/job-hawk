class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :bio, :experience, :location, :ask_salary, :current_position, :desired_job_title
end
