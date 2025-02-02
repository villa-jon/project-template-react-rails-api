Rails.application.routes.draw do
  # authenticate do     
    resources :shelters, only: [:index, :destroy, :create]
    resources :reviews
    resources :residents, only: [:index, :create, :destroy]
      post '/login', to: "auth#create"
      post '/signup', to: 'residents#create'
      # get 'persist', to: "auth#show"
      delete "logout", to: "sessions#destroy"
  # end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
