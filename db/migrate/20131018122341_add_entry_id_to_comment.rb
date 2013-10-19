class AddEntryIdToComment < ActiveRecord::Migration
  def up
  	add_column :comments, :entry_id, :integer, null: false
  end

  def down
  	remove_column :comments, :entry_id
  end
end
