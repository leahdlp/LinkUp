class TakeGroupIdOffSubCatTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :subcategories, :group_id
  end
end
