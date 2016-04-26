class Document
  include Mongoid::Document

  belongs_to :author
  belongs_to :category

  field :title, type: String
  field :body, type: String
  field :tags, type: Array
end
