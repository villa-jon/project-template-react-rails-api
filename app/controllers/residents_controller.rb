class ResidentsController < ApplicationController
	rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

	def index
		residents = Resident.all
		render json: residents, status: 200
	end


	def create
		resident = Resident.create(resident_params)
		session[:resident_id] = resident.id
		render json: resident, status: :created
	end

  	# def show
  	# 	render json: 
  	# end

	def show
		@currrent_resident = Resident.find(params[:id])
		render json: @current_resident
	end

	def password=(new_password)
		self.password_digest = dumb_hash(new_password)
	end

	def destroy
		@resident.destroy
	end 

	private 

	def find_resident
		@resident = Resident.find_by_name!(params[:_name])
		rescue ActiveRecord::RecordNotFound
		  render json: render_not_found_response
	end 

	def resident_params
		params.permit(
			# :name, :username, :email, :password, :password_confirmation
			:name, :password, :password_confirmation
			)
	end 

	def dumb_hash(input)
		input.bytes.reduce(:+)
	end

	def render_not_found_response
		render json: { error: "Resident not found" }, status: :not_found
	end     
end
