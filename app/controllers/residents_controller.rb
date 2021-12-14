class ResidentsController < ApplicationController
	# rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
	before_action :authorize_request, except: :create
  	before_action :find_user, except: %i[create index]

	def index
		residents = Resident.all
		render json: residents, status: 200
	end

	def show
		resident = Resident.find(params[:id])
		render json: resident
	end

	def create
	@resident = Resident.create(resident_params)
		if @resident.valid? 
			my_token = encode_token({resident_id: @resident.id})
			render json: { user: UserSerializer.new(@resident), token: my_token }
		else 
			render json: {error: 'failed to create a user'}
		end 
	end 

	def destroy
		@resident.destroy
	end 

	private 

	def find_resident
		@resident = Resident.find_by_username!(params[:_username])
		rescue ActiveRecord::RecordNotFound
		  render json: render_not_found_response
	end 

	def resident_params
		params.permit(
			:name, :username, :email, :password, :password_confirmation
			)
	end 

	def render_not_found_response
		render json: { error: "Resident not found" }, status: :not_found
	end     
end
