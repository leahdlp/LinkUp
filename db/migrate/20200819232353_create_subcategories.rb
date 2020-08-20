class CreateSubcategories < ActiveRecord::Migration[5.2]
  def change
    create_table :subcategories do |t|
      t.string :name, null: false
      t.integer :category_id, null: false

      t.timestamps
    end

    add_index :subcategories, [:name, :category_id], unique: true
  end
end
