class SheltersController < ApplicationController
	rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

	def index
		shelters = Shelter.all
		render json: shelters
	end

	def show
		shelter = Shelter.find(params[:id])
		render json: shelter
	end

	private 

	def render_not_found_response
		render json: { error: "Shelter not found" }, status: :not_found
	end     
end
