class Document
  include Mongoid::Document
  searchkick highlight: [:title, :body], language: "Portuguese"

  before_validation :configure_tags

  belongs_to :author
  belongs_to :category
  has_and_belongs_to_many :shared_users, class_name: 'User'

  field :title, type: String
  field :body, type: String
  field :tags
  field :global, type: Boolean
  field :owner_id

  validates :author, :body, presence: true

  def owner
    User.find(owner_id)
  end

  def as_json
    {
      id: _id,
      title: title,
      tags: tags,
      body: body,
      author: author.try(:name),
      category: category.try(:name),
    }
  end

  protected

    def configure_tags
      tags = self.tags.try(:split, ',')
    end
end
