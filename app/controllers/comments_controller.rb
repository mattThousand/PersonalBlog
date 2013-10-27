class CommentsController < ApplicationController

  respond_to :json

  def index
    @comments = Comment.all
    respond_with @comments
  end

  def create
    @name = params[:comment][:name]
    @body = params[:comment][:body]
    @entry_id = params[:comment][:entry_id]
    @comment = Comment.new(name: @name, body: @body, entry_id: @entry_id)
    @comment.save
    render json: @comment
  end
end
