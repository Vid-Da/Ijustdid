require 'pry'

class AchievementsController < ApplicationController
	before_action :authenticate_user!, only: [:create, :destroy, :show]

	def create
		@achievement = Achievement.new(achievement_params)
		if current_user
			@achievement.user_name = current_user.user_name
	binding pry
		end

		if @achievement.save
			render status: :created
		else
			render(json: @achievement.errors.full_messages, status: :bad_request)
		end
	end

	def index
		@achievements = Achievement.includes(:user).all
	end

	def show
		@achievement = Achievement.find(params[:id])
	end

	def destroy
		@achievement = Achievement.find(params[:id])
		@achievement.destroy
	end


	private

	def achievement_params
		params.require(:achievement).permit(:description, :title, :category, :lonlat, :date, :link)
	end

end
