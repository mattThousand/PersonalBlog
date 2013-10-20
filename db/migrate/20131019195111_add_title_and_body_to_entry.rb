class AddTitleAndBodyToEntry < ActiveRecord::Migration
  def up
  	add_column :entries, :title, :string, null: false
  	add_column :entries, :body, :string, null: false
  end

  def down
  	remove_column :entries, :title
  	remove_column :entries, :body
  end
end
