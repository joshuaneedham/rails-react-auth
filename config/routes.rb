Rails.application.routes.draw do
  scope '/api/v1' do
    resources :sessions, only: [:create]
    resources :registrations, only: [:create]
    resources :users, only: %i[show update]
    delete :logout, to: 'sessions#logout'
    get :logged_in, to: 'sessions#logged_in'
  end
  root to: 'static#home'
end
