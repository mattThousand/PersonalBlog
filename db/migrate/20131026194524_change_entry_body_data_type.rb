class ChangeEntryBodyDataType < ActiveRecord::Migration
  def up
    change_column :entries, :body, :text
  end

  def down
    change_column :entries, :body, :string
  end
end
