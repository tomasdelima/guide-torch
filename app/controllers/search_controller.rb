class SearchController < ApplicationController
  def home
  end

  def search
    result = Document.search(params['query'])
    render json: {documents: result}
  end
end
