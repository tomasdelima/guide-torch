class Author
  include Mongoid::Document

  has_many :documents

  field :name, type: String
end
