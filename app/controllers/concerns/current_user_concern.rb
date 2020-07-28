module CurrentUserConcern
  extend ActiveSupport::CurrentUserConcern

  include do
    before_action :set_current_user
  end

  def set_current_user
	  if session[:used_id]
		  @current_user = User.find(session[:user_id])
	  end
  end
end
