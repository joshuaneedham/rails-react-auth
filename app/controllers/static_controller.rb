class StaticController < ApplicationController
	def home
		render json: {status: "It works"}
	end
end