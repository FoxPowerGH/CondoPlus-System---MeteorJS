Template.post.onCreated(function() {
	this.subscribe('posts.home');
});

Template.post.helpers({
	posts: function () {
		return Posts.find({}, { sort: { likesCount: -1 } });
	}
});


Template.post.events({
	'click .like-btn': function() {
		var post = Posts.findOne(this._id);
		if (post.likes(Meteor.userId())) {
			Meteor.call('unlikePost', this._id);
		} else {
			Meteor.call('likePost', this._id);
		}
	}
});
