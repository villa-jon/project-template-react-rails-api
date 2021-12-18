class AuthController < ApplicationController

    def create

        @resident = Resident.find_by(name: params[:name])
   
        if @resident && @resident.authenticate(params[:password])
            my_token = encode_token({resident_id: @resident.id})
            # cardstacks = CardStack.where(user_id: @user.id)
            render json: { resident: ResidentSerializer.new(@resident), token: my_token }
        else 
            render json: {error: 'That user could not be found'}, status: 401
        end 
    end 

    def show
      render json: {user: ResidentSerializer.new(@resident)}
    end
end
