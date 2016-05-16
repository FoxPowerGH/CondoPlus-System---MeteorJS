Template.post.onCreated(function() {
	this.subscribe('posts');
	this.subscribe('likes');
});

Template.post.helpers({
	posts: function () {
		return Posts.find({}, { sort: { createdAt: -1 } });
	},
	getBulletinPath: function() {
		var ruta = this.__originalId;
		console.log(ruta);
		return ruta;
	}
});

Template.post.helpers({
	post: function() {
		return Posts.findOne(Router.current().params._id);
	}
});

Template.post.helpers({

});

Template.post.events({
//	'click .flag-btn': function() {
//		Meteor.call('flagPost', this._id);
//	},
	'click .like-btn': function() {
		var post = Posts.findOne(this._id);
		if (post.likes(Meteor.userId())) {
			Meteor.call('unlikePost', this._id);
		} else {
			Meteor.call('likePost', this._id);
		}
	}
});

/**/
Template.post.onRendered(function() {
	this.subscribe('onePostWithUser', Router.current().params._id);
});
