class ReviewsController < ApplicationController
	rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

	def index
		# render file: Rails.root.join('public/index.html'
		reviews = Review.all
		render json: reviews
	end

	def show
		reviews = Review.find(params[:id])
		render json: review
	end

	def create
		review = find_review
		review.update(review_params)
		render json: review
	end 

	def destroy
		review = find_review
		review.destroy
		head :no_content 
	end 

	def update
		
	end

	private 

	def find_reveiw
		Review.find_by(id: params[:id])
	end

	def review_params
		params.permit(:title, :image, :description, :notes)
	end 

	def render_not_found_response
		render json: { error: "Review not found" }, status: :not_found
	end     
end
