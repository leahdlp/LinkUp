class HaveEventsDateAndTimeBeSingleCol < ActiveRecord::Migration[5.2]
  def change
    rename_column :events, :date, :date_time
    remove_column :events, :time

    add_index :events, [:group_id, :date_time, :location_id], unique: true
  end
end
