Rails.application.routes.draw do
  resources :items, only: [:show, :index]
  resources :categories, only: [:sohw, :index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
