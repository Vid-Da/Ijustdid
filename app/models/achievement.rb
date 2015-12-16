class Achievement < ActiveRecord::Base
  belongs_to :user
  validates :title, :lonlat, :category, :description, :date, presence: true
  delegate :name, to: :user, prefix: true, allow_nil: true
end
