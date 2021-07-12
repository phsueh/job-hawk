class UsersController < ApplicationController

    def login
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            wristband = encode_token(user_id: user.id)
            render json: {user: UserSerializer.new(user), token: wristband} 
        else
            render json: {error:"Wrong username or password"}
        end
    end

end
