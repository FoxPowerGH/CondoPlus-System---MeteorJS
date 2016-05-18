/**
 * Publish all posts
 */
Meteor.publish('posts', function () {
  return Posts.find({}, { sort: { createdAt: -1 } });
});


/**
 * Publish all Likes
 */
Meteor.publish('likes', function () {
  return Likes.find();
});

/**
 * Publish posts with all the creators profiles
*/
Meteor.publishComposite('posts.home', {
  find: function() {
    var ip = this.connection.clientAddress;
    return Posts.find({}, { sort: { likesCount: -1 } });
  },
  children: [{
    find: function(post) {
      return Meteor.users.find({ _id: post.createdBy }, { fields: { profile: 1 } });
    }
  }, {
    find: function(post) {
      return Likes.find({ userId: this.userId, postId: post._id });
    }
  }]
});



/**
 * Publish one post specifically with its creator profile
 */
 Meteor.publishComposite('onePostWithUser', function(postId) {
   check(postId, String);
   return {
     find: function() {
       var ip = this.connection.clientAddress;
       return Posts.find({ _id: postId });
     },
     children: [{
       find: function(post) {
         return Meteor.users.find({ _id: post.createdBy }, { fields: { profile: 1 } });
       }
     }]
   };
 });
