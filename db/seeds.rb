# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


salt = BCrypt::Engine::generate_salt
# => $2a$12$UW5etUc/o1YL4sSdeTBPku
password_digest = BCrypt::Engine::hash_secret('abc123', salt)
# => $2a$12$UW5etUc/o1YL4sSdeTBPkueUWwNIPNdQNAwzuSGkS3L5coBKMMZHm"


eric = User.create(username: 'eric' ,password_digest: password_digest, bio:'leader of bananas rockets and curlies', experience:'seasoned vet', location:'earth', ask_salary: 250000, current_position: "Instructor at Flat Iron School", desired_job_title:"Owner of Flat Iron School")

post_one = Post.create(user_id: eric.id, content: "chickens", private: false)

comment_one = Comment.create(post_id: post_one.id, user_id: eric.id, content: "I love chicken!")
