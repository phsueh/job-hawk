class CommentsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :show_errors

    def create
        new_comment = Comment.create!(comment_params)
        render json: new_comment, status: :created
    end

    private
    def comment_params
        params.permit(:content, :user_id, :post_id)
    end

    def show_errors(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: 422
    end
end
