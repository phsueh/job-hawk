class DirectUploadsController < ActiveStorage::DirectUploadsController
    skip_before_action :verify_authenticity_token
   def create
    blob = ActiveStorage::Blob.create_before_direct_upload!(blob_args)   
    User.first.update(avatar: blob.signed_id)
    byebug
   end 
end
