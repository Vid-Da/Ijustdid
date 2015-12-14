require 'pry'

class AchievementsController < ApplicationController

	def new
	end

	def create
		@achievement = Achievement.new(achievement_params)

		if @achievement.save
			render json: @achievement, status: :created
		else
			render(status: :bad_request)
		end
	end

	def index
		@achievements = Achievement.all
	end


	private

	def achievement_params
		params.require(:achievement).permit(:description, :title, :category, :lonlat, :date, :link)
	end

end
