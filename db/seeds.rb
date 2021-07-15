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

posts = ["What books should I be reading?",
    "What do you do at work on a daily basis?",
    "What's the best thing about your job?",
    "How did you get to this position?",
    "How long have you worked in this industry?",
    "What drew you to this field?",
    "Where did you go to school?",
    "What did you study?",
    "How long have you been with this company?",
    "What are your long-term career goals?",
    "Do you do any professional development?",
    "What skills have you found vital to your job?",
    "How has the industry changed since you started?",
    "What is the culture like at your company?",
    "What organizational challenges have you faced?",
    "What are your next career steps?",
    "What has been your biggest success factor?",
    "What would you do differently if you could go back in time?",
        "What are your daily habits?",
        "Where do you see the industry going in the future?",
        "What should I be doing to improve my career prospects?",
        "What professional associations are you a member of?"]
    
    Tips = "Here are some tips to help your interview with someone you admire go well:
    
    Be respectful. Some questions may not be applicable to every mentor or industry leader. Make sure your guest remains comfortable and the questions you ask are appropriate to your relationship and the person's career.
    
    Ask ahead of time. Set up a meeting rather than surprising the person in their office. Make sure both of you have adequate time to have a meaningful conversation.
    
    Take notes. Write down pertinent answers and advice offered by the interviewee. Keeping notes from the conversation will help you remember valuable points later on.
    
    Maintain the connection. After the interview, send the interviewee a note or email thanking them for their time and expressing an interest in keeping in touch.
    
    Apply the advice. Use the applicable advice you receive from the interviewee in your professional life. Their career path may not match yours exactly, but you can learn from their challenges and successes as you navigate your own.
    
    Ask follow-up questions. Show you're listening by asking follow-up questions if you want to know more about a particular anecdote, idea or piece of advice.
    
    Keep it conversational. Remember, this is a conversational interview. Make sure you're also sharing ideas so that the interviewee has time to reflect and respond to your questions."


eric = User.create(username: 'Eric' ,password_digest: password_digest, bio:'leader of bananas rockets and curlies', experience:'seasoned vet', location:'earth', ask_salary: 250000, current_position: "Instructor at Flat Iron School", desired_job_title:"Owner of Flat Iron School")
paul = User.create(username: 'Paul' ,password_digest: password_digest)
yisrael = User.create(username: 'Yisrael' ,password_digest: password_digest)
Mo = User.create(username: 'Mo' ,password_digest: password_digest)
Greg = User.create(username: 'Greg' ,password_digest: password_digest)
Nicholas = User.create(username: 'Nicholas' ,password_digest: password_digest)
Sue = User.create(username: 'Sue' ,password_digest: password_digest)
Vee = User.create(username: 'Vee' ,password_digest: password_digest)
Jason = User.create(username: 'Jason' ,password_digest: password_digest)
Leon = User.create(username: 'Leon' ,password_digest: password_digest)
Jouquin = User.create(username: 'Jouquin' ,password_digest: password_digest)
Megan = User.create(username: 'Megan' ,password_digest: password_digest)

post1 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: true)
post2 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: true)
post3 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: true)
post4 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: true)
post5 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: true)
post6 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: true)
post7 = Post.create(user_id: User.all.sample.id, content: Tips, private: true)
post8 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: true)
post9 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: false)
post10 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: false)
post11 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: false)
post12 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: false)
post13 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: false)
post14 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: false)
post15 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: false)
post16 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: false)
post17 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: false)
post18 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: false)
post19 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: false)
post20 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: false)
post21 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: false)
post22 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: false)
post23 = Post.create(user_id: User.all.sample.id, content: posts.sample, private: false)

comment1 = Comment.create(post_id: Post.all.sample.id, user_id: User.all.sample.id, content: posts.sample)
comment2= Comment.create(post_id: Post.all.sample.id, user_id: User.all.sample.id, content: posts.sample)
comment3= Comment.create(post_id: Post.all.sample.id, user_id: User.all.sample.id, content: posts.sample)
comment4= Comment.create(post_id: Post.all.sample.id, user_id: User.all.sample.id, content: posts.sample)
comment5= Comment.create(post_id: Post.all.sample.id, user_id: User.all.sample.id, content: posts.sample)
comment6= Comment.create(post_id: Post.all.sample.id, user_id: User.all.sample.id, content: posts.sample)
comment7= Comment.create(post_id: Post.all.sample.id, user_id: User.all.sample.id, content: posts.sample)
comment8= Comment.create(post_id: Post.all.sample.id, user_id: User.all.sample.id, content: posts.sample)
comment9= Comment.create(post_id: Post.all.sample.id, user_id: User.all.sample.id, content: posts.sample)
comment10= Comment.create(post_id: Post.all.sample.id, user_id: User.all.sample.id, content: posts.sample)
comment11 = Comment.create(post_id: Post.all.sample.id, user_id: User.all.sample.id, content: posts.sample)
comment12 = Comment.create(post_id: Post.all.sample.id, user_id: User.all.sample.id, content: posts.sample)
comment13 = Comment.create(post_id: Post.all.sample.id, user_id: User.all.sample.id, content: posts.sample)
