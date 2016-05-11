Template.navbar.onCreated(function() {
  this.subscribe('categories');
});

Template.navbar.helpers({
  categories: function() {
    return Categories.find({}, { sort: { index: 1 } });
  },
  getCategoryPath: function() {
    return RouterLayer.pathFor('work', this);
  },
});
