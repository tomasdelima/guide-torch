class SearchController < ApplicationController
  def home
  end

  def search
    result = Document.where({
      body: /.*#{params[:query]}.*/,
      # author: /.*#{params[:query]}.*/,
      # category: /.*#{params[:query]}.*/,
      # title: /.*#{params[:query]}.*/,
    })
    render json: {documents: result}
  end
end
