class AddTitleToAchievements < ActiveRecord::Migration
  def change
    add_column :achievements, :title, :string
    add_column :achievements, :date, :date
    add_column :achievements, :link, :string
  end
end
