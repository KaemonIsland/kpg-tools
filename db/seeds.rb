#Creates 10 fake users

10.times do |i|
    User.create(
      name: "User#{i}",
      email: "User#{i}@example.com",
      password: 'foobar',
      password_confirmation: 'foobar'
    )
end
  
print "10 users created"