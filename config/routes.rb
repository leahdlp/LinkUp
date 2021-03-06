Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :groups, except: [:new, :edit] do 
      resources :members, only: [:index]
      resources :events, only: [:create]
    end
    resources :members, only: [:show, :create, :destroy]
    resources :categories, only: [:index, :show]
    resources :subcategories, only: [:index, :show]
    resources :locations, only: [:index, :show]
    resources :events, except: [:new, :edit, :create] do 
      resources :attendees, only: [:index]
    end
    resources :attendees, only: [:show, :create, :destroy]
    resources :search, only: [:index]
    resources :posts, only: [:create, :index, :show]
  end

end
