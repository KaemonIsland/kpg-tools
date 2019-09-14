require 'rails_helper'

RSpec.describe 'Users API', type: :request do
  let!(:users) { create_list(:user, 10) }
  let(:user_id) { users.first.id }

  describe 'Get /users' do
    before { get '/api/v1/users' }
     
    it 'returns users' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /users/:id' do
    before { get "/api/v1/users/#{user_id}" }

    context 'when the user exists' do

      it 'returns the user' do
        expect(json).to_not be_empty
        expect(json['id']).to eq(user_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

    end


    context 'When the user does not exist' do
        let(:user_id) { 100 }

        it 'returns status code 404' do
          expect(response).to have_http_status(404)
        end

        it 'returns a not found message' do
          expect(response.body).to match(/Couldn't find User/)
        end

    end
  end

  describe 'POST /users' do
    let(:valid_attributes) {{ user: { 
      name: 'kaemon', 
      email: 'fake@email.com', 
      password: 'foobar', 
      password_confirmation: 'foobar'
    }}}

    context 'when the request is valid' do
      before { post '/api/v1/users', params: valid_attributes }

      it 'creates a user' do
        expect(json['name']).to eq('kaemon')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/api/v1/users', params: { user: { 
        name: 'whatevs'
      } } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validations failure message' do
        expect(response.body).to match(/Validation failed: Email can't be blank/)
      end
    end
  end

  describe 'PUT /users/:id' do
    let(:valid_attributes) {{ user: {
      name: 'Kaemon', 
      email: 'better@email.com',
    }}}

    context 'when the record exists' do
      before { put "/api/v1/users/#{user_id}", params: valid_attributes }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  describe "DELETE /users/:id" do
    before { delete "/api/v1/users/#{user_id}"}

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end

end