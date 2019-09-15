Rails.application.routes.draw do
  post 'authenticate', to: 'authentication#authenticate'
  namespace :api do
    namespace :v1 do
      resources :users, except: [:edit]
    end
  end
  get 'path', to: "application#fallback_index_html", constraints:
  ->(request) do
    !request.xhr? && request.format.html?
  end
end
