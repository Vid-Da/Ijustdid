class AchievementsController < ApplicationController

	def new
	end

	def create
		parameters = JSON.parse(params[:ajax_parameters].to_json)
		achievement = Achievement.new(generate_new_achievement(parameters))

		if achievement.save
			render json: achievement, status: :created
		else
			render(status: :bad_request)
		end
	end

	def index
		@achievements = Achievement.all
		render json: @achievements
	end


	private

	def generate_new_achievement parameters
		{
			title: parameteres['title'],
			description: parameters['description'],
			category: parameters['category'],
			lonlat: parameters['lonlat'],
		}
	end

end
