class SessionsController < ApplicationController
	# before_action :authorize_request, except: :create
  	# before_action :find_resident, except: %i[create]

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

	def find_resident
		@resident = Resident.find_by_name(params[:_name])
		# rescue ActiveRecord::RecordNotFound
		#   render json: render_not_found_response
	end 

	def login
		@resident = Resident.find_by(name: params[:name])
	    
		if @resident && @resident.authenticate(params[:password])
		  token = encode_token({resident_id: @resident.id})
		  render json: {resident: @resident, token: token}
		else
		  render json: {error: "Invalid username or password"}
		end
	end
	    

	private 

	def resident_params
		params.permit(
			# :name, :username, :email, :password, :password_confirmation
			:name, :password, :password_confirmation
			)
	end 

end
