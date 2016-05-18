FactoryGirl.define do
  factory :document do
    title    'A title'
    body     'A body'
    tags     ['tag 1', 'tag 2']
    global   true
    author

    trait :without_author do
      author nil
    end
  end
end
