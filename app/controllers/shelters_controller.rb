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

	def create
		review = find_review
		review.update(review_params)
		render json: review
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
		params.permit(:title, :image, :description, :notes)
	end 

	def render_not_found_response
		render json: { error: "Shelter not found" }, status: :not_found
	end     
end
