class UsersController < ApplicationController
	before_action :authenticate_user!, only: :show

	def home
	end
	
end
