class SheltersController < ApplicationController
	rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
	skip_before_action :authorized, only: [:create, :destroy, :show, :index]

	def index
		shelters = Shelter.all
		render json: shelters, each_serializer: SheltersSerializer
	end

	def show
		shelters = Shelter.find_shelter
		render json: shelters
	end

	def create
		shelter = find_shelter
		shelter.update(shelter_params)
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
	
	def sheler_params
		params.permit(:address, :rating, :description, :name, :url)
	end 

	def render_not_found_response
		render json: { error: "Shelter not found" }, status: :not_found
	end     
end
