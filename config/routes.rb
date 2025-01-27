Rails.application.routes.draw do
  
  # resources :comments
  # resources :posts
  # resources :users

  post '/login', to: "users#login"
  get '/me', to: "users#me"
  post '/users', to: "users#create"
  patch '/users/:id', to: "users#update"
  post '/comments', to: "comments#create"
  post '/posts', to: "posts#create"
  delete "/users/:id", to: "users#destroy"
  delete "/posts/:id", to: "posts#destroy"
  delete "/comments/:id", to: "comments#destroy"
  get "/posts/public", to: "posts#public"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
