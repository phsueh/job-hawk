class CommentsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :show_errors
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    before_action :find_comment, only: [:destroy]
    def create
        new_comment = Comment.create!(comment_params)
        render json: new_comment, status: :created
    end

    def destroy
        @comment.destroy
        render json: @comment
    end

    private
    def find_comment
        @comment = Comment.find(params[:id])
    end

    def comment_params
        params.permit(:content, :user_id, :post_id)
    end

    def show_errors(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: 422
    end

    def record_not_found
        render json: {error: "Comment not found"}, status: 404
    end
end
