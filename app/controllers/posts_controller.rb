class PostsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :show_errors
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    before_action :find_post, only: [:destroy]

    def create
        new_post = Post.create!(post_params)
        render json: new_post, status: :created
    end

    def destroy
        @post.destroy
        render json: @post
    end

    def public
        # byebug
        posts = Post.where(private: false)
        render json: posts
    end

    private
    def find_post
        @post = Post.find(params[:id])
    end
    
    def post_params
        params.permit(:content, :user_id, :private)
    end

    def show_errors(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: 422
    end

    def record_not_found
        render json: {error: "Post not found"}, status: 404
    end
end
