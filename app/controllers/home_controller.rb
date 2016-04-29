class HomeController < ApplicationController
  def login
    user = User.find_by(email: params[:email]) rescue nil
    if user && Devise::Encryptor.compare(User, user.encrypted_password, params[:password])
      sign_in user
      render json: {status: 200}
    else
      render json: {status: 401}
    end
  end
end
