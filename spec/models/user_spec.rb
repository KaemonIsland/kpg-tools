require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'Valid User' do
      subject { User.new(name: 'Kaemon', 
                         email: 'example@email.com', 
                         password: 'foobar', 
                         password_confirmation: 'foobar') }

      it 'is invalid if name is blank' do
        subject.name = ''
        expect(subject.name).to eq('')
        expect(subject.valid?).to eq(false)
      end

      it 'is valid with name' do
        expect(subject.name).to eq('Kaemon')
        expect(subject.valid?).to eq(true)
      end

      it 'is invalid if the email is blank' do
        subject.email = ''
        expect(subject.email).to eq('')
        expect(subject.valid?).to eq(false)
      end

      it 'is valid with a valid email' do
        valid_emails = ['example@email.com', 'another@example.com', 'CaseType@hotmail.com']
        valid_emails.each do |email|
          subject.email = email
          expect(subject.valid?).to eq(true)
        end
      end

      it 'is invalid with invalid email' do
        invalid_emails = ['E_xam..ple@hotma@il.com', 'example.@emai@lc.om', '$not@nem.ai@tester.com']
        invalid_emails.each do |email|
          subject.email = email
          expect(subject.valid?).to eq false
        end
      end
  end
end
