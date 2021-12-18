class SheltersController < ApplicationController
	# binding.pry
	rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

	def index
		shelters = Shelter.all
		render json: shelters
		
	end

	def show
		shelters = Shelter.find_shelter
		render json: shelters
	end

	def create
		shelter = Shelter.create(shelter_params)
		render json: shelter
	end 

	def destroy
		shelter = find_shelter
		shelter.destroy
		head :no_content 
	end 

	private 

	def find_shelter
		Shelter.find_by(id: params[:id])
	end 
	
	def shelter_params
		params.permit(:address, :rating, :description, :name, :url)
	end 

	def render_not_found_response
		render json: { error: "Shelter not found" }, status: :not_found
	end     
end
