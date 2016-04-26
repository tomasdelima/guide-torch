class Document
  include Mongoid::Document
  searchkick

  before_validation :configure_tags

  belongs_to :author
  belongs_to :category

  field :title, type: String
  field :body, type: String
  field :tags

  def configure_tags
    tags = self.tags.split(',')
  end
end
