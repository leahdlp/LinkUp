class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.text :description, null: false 
      
      t.integer :category_id, null: false
      t.integer :subcategory_id, null: false
      t.integer :location_id, null: false
      t.integer :creator_id, null: false

      t.timestamps
    end

    add_index :groups, [:name, :creator_id], unique: true
    add_index :groups, [:name, :subcategory_id], unique: true
  end
end
