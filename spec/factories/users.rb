FactoryBot.define do
  factory :user do
    name { Faker::Name.first_name }
    email { "#{Faker::Name.first_name}@hotmail.com" }
    password { 'foobar' }
    password_confirmation { 'foobar' }
  end
end
