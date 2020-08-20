class MakeSubcategoryAJoinsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :subcategories, :group_id, :integer, null: false
    remove_column :groups, :category_id, null: false
    
    add_index :groups, [:name, :description], unique: true
    add_index :groups, [:name, :location_id], unique: true
  end
end
