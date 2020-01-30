class CreateCommments < ActiveRecord::Migration[6.0]
  def change
    create_table :commments do |t|
      t.text :body
      t.integer :message_id
      t.timestamps
    end
  end
end
