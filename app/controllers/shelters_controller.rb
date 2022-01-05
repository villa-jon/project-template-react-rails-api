class SheltersController < ApplicationController
	# binding.pry
	before_action :find_shelter
	rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

	def index
		@shelters = Shelter.all
		render json: @shelters
		
	end

	def show
		# shelters = Shelter.find_shelter
		render json: shelter
	end

	def create
		# byebug
		@shelter = Shelter.create(shelter_params)
		render json: @shelter
	end 

	def destroy
		# byebug
		# shelter = find_shelter
		@shelter.delete
		head :no_content 
	end 

	private 

	def find_shelter
		@shelter = Shelter.find_by(id: params[:id])
	end 

	def shelter_params
		params.permit(:address, :rating, :description, :name, :url)
	end 

	def render_not_found_response
		render json: { error: "Shelter not found" }, status: :not_found
	end     

	def errors
		render json: { error: @shelter.error.full_messages }, status: :not_found
	end 
end
