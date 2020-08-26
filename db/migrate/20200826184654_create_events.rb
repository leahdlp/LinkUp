class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.integer :group_id, null: false
      t.integer :creator_id, null: false
      t.datetime :date, null: false
      t.datetime :time, null: false
      t.integer :location_id, null: false
      t.timestamps
    end

    add_index :events, [:name, :group_id, :date, :time, :location], unique: true
  end
end
