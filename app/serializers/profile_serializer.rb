class ProfileSerializer < ActiveModel::Serializer
  attributes :username, :bio, :experience, :location, :ask_salary, :current_position, :desired_job_title
end
