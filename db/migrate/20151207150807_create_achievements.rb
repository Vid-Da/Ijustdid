class CreateAchievements < ActiveRecord::Migration
  def change
    create_table :achievements do |t|
      t.text :description
      t.st_point :location
      t.string :category
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
