class EntriesController < ApplicationController
	respond_to :json

	def index
		@entries = Entry.all
		render json: @entries,
    	each_serializer: EntrySerializer
	end
	
end
