module CurrentUserConcern
  extend ActiveSupport::Concern

  def set_current_user
    @current_user = User.find(session[:user_id]) if session[:user_id]
  end
end
