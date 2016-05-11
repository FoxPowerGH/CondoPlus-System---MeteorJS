Posts = new orion.collection('posts', {
  singularName: 'post', // The name of one of these items
  pluralName: 'posts', // The name of more than one of these items
  title: 'Posts', // The title in the index of the collection
  link: {
    title: 'Posts'
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      { data: "author", title: "Author" },
      orion.attributeColumn('image', 'image', 'Image'),
      orion.attributeColumn('summernote', 'body', 'Content'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By'),
    ]
  }
});


Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Post Title'
  },
  author: {
    type: String,
    label: 'Author'
  },
  category: {
    type: String,
    label: "Category",
    allowedValues: ['general', 'maintenance', 'issue_report'],
    autoform: {
      options: [
        {label: "General", value: "general"},
        {label: "Maintanance", value: "maintenance"},
        {label: "Issue Report", value: "issue_report"}
      ]
    }
  },
  image: orion.attribute('image', {label: 'Image', optional: true}),
  body:   orion.attribute("summernote", {label: 'Message'}),
  createdAt: orion.attribute('createdAt'),
  createdBy: orion.attribute('createdBy')
}));
