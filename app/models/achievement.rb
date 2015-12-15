class Achievement < ActiveRecord::Base
  belongs_to :user
  validates :title, :lonlat, :category, :description, presence: true
  delegate :name, to: :user, prefix: true, allow_nil: true
end
