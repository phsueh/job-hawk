class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :show_error
    before_action :authorized, only: [:me]
    before_action :find_user, only: [:update, :destroy]

    def login
        user = User.find_by(username: params[:username])
        posts = Post.all
        if user && user.authenticate(params[:password])
            wristband = encode_token(user_id: user.id)
            render json: {user: UserSerializer.new(user), token: wristband, posts: ActiveModel::Serializer::CollectionSerializer.new(posts, each_serializer: PostSerializer)} 
        else
            render json: {errors:"Wrong username or password"}
        end
    end

    def me
        # byebug
        posts = Post.all
        profiles = User.all.where("id <> #{@user.id}")
        wristband = encode_token({user_id: @user.id})
        render json: {user: UserSerializer.new(@user), token: wristband, posts: ActiveModel::Serializer::CollectionSerializer.new(posts, each_serializer: PostSerializer)}
    end

    def create
        posts = Post.all
        user = User.create(user_params)
        if user.valid?
            wristband = encode_token({user_id: user.id})
            render json: {user: UserSerializer.new(user), token: wristband, posts: ActiveModel::Serializer::CollectionSerializer.new(posts, each_serializer: PostSerializer)}
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        @user.update(update_user_params)
        render json: @user
    end

    def destroy
        @user.destroy
        render json: @user
    end

    private

    def user_params
        params.permit(:username, :password)
    end

    def update_user_params
        params.permit(:bio, :experience, :location, :ask_salary, :current_position, :desired_job_title)
    end

    def find_user
        @user = User.find(params[:id])
    end

    def show_error
        render json: {error: "User not found"}, status: 404
    end
end
