class CreateAttendees < ActiveRecord::Migration[5.2]
  def change
    create_table :attendees do |t|
      t.integer :event_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :attendees, [:event_id, :user_id], unique: true
  end
end
