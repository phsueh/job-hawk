class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.text :bio
      t.text :experience
      t.string :location
      t.integer :ask_salary
      t.string :current_position
      t.string :desired_job_title

      t.timestamps
    end
  end
end
