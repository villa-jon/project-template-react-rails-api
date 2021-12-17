class CreateResidents < ActiveRecord::Migration[6.1]
  def change
    create_table :residents do |t|
      t.string :name
      t.string :password_digest
      t.string :age
      t.string :email

      t.timestamps
    end
  end
end
