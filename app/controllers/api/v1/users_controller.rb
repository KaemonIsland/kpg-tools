class Api::V1::UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]
    skip_before_action :authenticate_request, only: [:create]
    # Get api/v1/users
    def index 
        @users = User.all
        json_response(@users)
    end

    # GET api/v1/users/:id
    def show
        json_response(@user)
    end

    # POST api/v1/users
    def create
        @user = User.create!(user_params)
        json_response(@user, :created)
    end

    # PUT api/v1/users/:id
    def update
        @user.update(user_params)
        head :no_content
    end

    # DELETE api/v1/users/:id
    def destroy
        @user.destroy
        head :no_content
    end

    private

        def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
        end

        def set_user
        @user = User.find(params[:id])
        end
end
