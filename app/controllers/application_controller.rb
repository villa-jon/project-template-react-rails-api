class ApplicationController < ActionController::API
  include ActionController::Cookies
#   before_action :authorized

  def encode_token(payload)
      JWT.encode(payload, 'supa secretttt')
  end 

  def auth_header
      request.headers['Authorization']
  end 

  def decoded_token
      if auth_header
          token = auth_header.split(' ')[1]
          begin
              JWT.decode(token, 'supa secretttt', true, algorithm: 'HS256')
          rescue JWT::DecodeError
              nil
          end 
      end 
  end 

  def logged_in_user
      if decoded_token
          user_id = decoded_token[0]['resident_id']
          return @resident = Resident.find_by(id: resident_id)
      end 
  end 
  
  def logged_in?
      !!logged_in_user
  end 

#   def authorized
  
#       render json: {message: 'Please log in'}, status: :unauthorized unless logged_in?
#   end
end
