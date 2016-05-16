Appointments = new orion.collection('appointments', {
  singularName: 'Booking', // The name of one of this items
  pluralName: 'Booking', // The name of more than one of this items
  title: 'Booking', // The title of the page
  link: {
    title: 'Booking'
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: "index", title: "Index" },
      { data: "title", title: "Title" },
      { data: "bookdate", title: "Book Date" },
//      orion.attributeColumn('summernote', 'body', 'Body'),
//      orion.attributeColumn('hasOne', 'categoryId', 'Categories'),
      orion.attributeColumn('createdBy', 'createdBy', 'createdBy'),
      orion.attributeColumn('createdAt', 'createdAt', 'createdAt')
    ]
  }
});


Appointments.attachSchema(new SimpleSchema({
  index: {
    type: Number,
    label: 'Index',
  },
  title: {
    type: String,
    label: 'Title'
  },
  bookdate:{
    type: Date,
    label: 'Book Date'
  },
//  body: orion.attribute('summernote', { label: 'Body'  }),
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt'),
}));


/**
 * Using dburles:collection-helpers we will add a helper to the posts
 * collection to easily get the user
 */
Appointments.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});
