class ApplicationController < ActionController::API
  include ActionController::Cookies
#   before_action :authenticate_user!, except: [:new, :create]

    def encode_token(payload)
        JWT.encode(payload, 'supa secretttt')
    end 

    def logged_in_user
        if decoded_token
            user_id = decoded_token[0]['user_id']
            return @user = User.find_by(id: user_id)
        end 
    end 
    
    def logged_in?
        !!logged_in_user
    end 

end
