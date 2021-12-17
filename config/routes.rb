Rails.application.routes.draw do
  resources :shelters
  resources :reviews
  resources :residents, only: [:create, :index, :destroy] 
    post 'login', to: "auth#create"
    post '/signup', to: 'users#create'
    get 'persist', to: "auth#show"
    delete "logout", to: "sessions#destory"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
