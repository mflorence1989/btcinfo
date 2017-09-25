Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root  'pages#home'
  get 'about', to: 'pages#about'
  resources :articles
  get 'signup', to: 'users#new'
  get 'ticker', to: 'tickers#show'
  get 'chart', to: 'charts#show'
  get 'table', to: 'tables#show'

resources :users, except: [:new]
end
