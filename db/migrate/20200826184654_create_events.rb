class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.integer :group_id, null: false
      t.datetime :date, null: false
      t.datetime :time, null: false
      t.integer :location_id, null: false
      t.timestamps
    end

    add_index :events, [:group_id, :date, :time, :location_id], unique: true
  end
end
