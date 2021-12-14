class CreateShelters < ActiveRecord::Migration[6.1]
  def change
    create_table :shelters do |t|
      t.string :address
      t.integer :rating
      t.string :description
      t.string :name
      t.string :url

      t.timestamps
    end
  end
end
