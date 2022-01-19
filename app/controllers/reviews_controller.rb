class ReviewsController < ApplicationController
	# before_action :find_review
	rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

	def index
		# render file: Rails.root.join('public/index.html'
		# byebug
		@reviews = Review.all
		# byebug
		render json: @reviews
	end

	def show
		# reviews = Review.find(params[:id])
		render json: review
	end

	def create
		@reviews = Review.create(review_params)
		render json: @reviews
	end 

	def destroy
		@reviews.destroy
	end 

	private 

	def find_review
		Review.find_by(id: params[:id])
	end

	def review_params
		params.require(:review).permit(:comment, :rating)
		# params.permit(:comment, :rating)
	end 

	def render_not_found_response
		render json: { error: "Review not found" }, status: :not_found
	end     
end
