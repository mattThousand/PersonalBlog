class ConsolidateName < ActiveRecord::Migration
  def up
    remove_column :comments, :first_name
    remove_column :comments, :last_name
    add_column :comments, :name, :string
  end

  def down
    remove_column :comments, :name
    add_column :comments, :last_name, :string
    add_column :comments, :first_name, :string
  end
end
