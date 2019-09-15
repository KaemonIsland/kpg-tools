class ApplicationController < ActionController::API
    include Response
    include ExceptionHandler

    before_action :authenticate_request
    attr_reader :current_user

    def fallback_index_html
        render :file => 'public/index.html'
    end

    private

        def authenticate_request
            @current_user = AuthorizeApiRequest.call(request.headers).result
            render json: { error: 'Not Authorized' }, status: 401 unless @current_user
        end
end
