Meteor.publish("myData", function() {
  return MyData.find()
})

populate = function() {
  while (MyData.find().count() < 10) {
    MyData.insert({
      name: "User " + Random.hexString(24),
      image: "http://i.imgur.com/NqyBZSp.gif",
      details: "Details"
    })
  }
}

Meteor.startup(function() {
  populate()
})

Meteor.methods({
  repopulate: function() {
    MyData.insert({
      name: "User " + Random.hexString(24),
      image: "http://i.imgur.com/NqyBZSp.gif",
      details: "Details"
    })
  },
  reset: function() {
    MyData.remove({affirmative: true});
  }
})

if (Meteor.users.find().count() === 0) {
  Accounts.createUser({
    username: "samcorcos",
    password: "password",
    profile: {
      image: "http://i.imgur.com/NqyBZSp.gif"
    }
  })
}
