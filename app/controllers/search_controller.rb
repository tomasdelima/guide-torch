class SearchController < ApplicationController
  def home
  end

  def search
    result = Document.search(params['query'], fields: [:title, :body], highlight: {title: {number_of_fragments: 0}, body: {fragment_size: 500, number_of_fragments: 1}, tag: "<strong>"}).with_details.map do |document, details|
      document = document.as_json
      document[:title] = details[:highlight][:title] if details[:highlight][:title]
      document.merge(body_highlighted: details[:highlight][:body])
    end.flatten.compact
    render json: {documents: result}
  end
end
