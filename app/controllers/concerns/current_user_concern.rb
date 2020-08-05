module CurrentUserConcern
  extend ActiveSupport::CurrentUserConcern

  include do
    before_action :set_current_user
  end

  def set_current_user
    @current_user = User.find(session[:user_id]) if session[:used_id]
  end
end
