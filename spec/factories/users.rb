FactoryGirl.define do
  factory :user do
    sequence(:name) { |n| "User #{n}" }
    sequence(:email) { |n| "person#{n}@example.com" }
    password '12345678'
  end
end
