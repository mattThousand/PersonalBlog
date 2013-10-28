class EntriesController < ApplicationController
	respond_to :json

	def index
		@entries = Entry.all
		render json: @entries,
    	each_serializer: EntrySerializer
	end

  def show
    @entry = Entry.find(params[:id])
    render json: @entry
  end
	
end
