Rails.application.routes.draw do
  resources :shelters
  resources :reviews
  resources :residents
    post 'login', to: "auth#create"
    post '/signup', to: 'residents#create'
    # get 'persist', to: "auth#show"
    delete "logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
