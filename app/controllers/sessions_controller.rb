class SessionsController < ApplicationController
	# before_action :authorize_request, except: :create
  	before_action :find_user, except: %i[create index]

	  def index
		session[:session_hello] ||= "World"
		cookies[:cookies_hello] ||= "World"
		render json: { session: session, cookies: cookies.to_hash }
	end

	def create
		@resident = Resident.create(resident_params)
		if @resident.valid? 
			my_token = encode_token({resident_id: @resident.id})
			render json: { resident: ResidentSerializer.new(@resident), token: my_token }
		else 
			render json: {error: 'failed to create a user'}
		end 
	end 
	
	def destroy
		session.delete :resident_id
		head :no_content
	end 


	private 

	def resident_params
		params.permit(
			# :name, :username, :email, :password, :password_confirmation
			:name, :password, :age, :email, :password_confirmation
			)
	end 
end
