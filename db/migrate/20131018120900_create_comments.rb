class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :body
      t.string :first_name
      t.string :last_name

      t.timestamps
    end
  end
end
