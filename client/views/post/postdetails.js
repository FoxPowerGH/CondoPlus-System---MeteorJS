Template.postdetail.helpers({
	post: function() {
		return Posts.findOne(RouterLayer.getParam('postId'));
	}
});

Template.postdetail.onRendered(function() {
	console.log(RouterLayer.getParam('postId'))
	this.subscribe('onePostWithUser', RouterLayer.getParam('postId'));
});
