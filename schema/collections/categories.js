Categories = new orion.collection('categories', {
  pluralName: orion.helpers.getTranslation('categories.pluralName'),
  singularName: orion.helpers.getTranslation('categories.singularName'),
  title: orion.helpers.getTranslation('categories.title'),
  link: {
    title: orion.helpers.getTranslation('categories.title'),
  },
  tabular: {
    columns: [
      { data: "index", title: "Index" },
      { data: 'name', title: orion.helpers.getTranslation('categories.schema.name') },
      orion.attributeColumn('createdAt', 'createdAt', orion.helpers.getTranslation('categories.schema.createdAt'))
    ],
  },
});

Categories.attachSchema(new SimpleSchema({
  index: {
    type: Number,
    label: orion.helpers.getTranslation('categories.schema.index'),
  },
  name: {
    type: String,
    label: orion.helpers.getTranslation('categories.schema.name'),
  },
  url: {
    type: String,
    label: orion.helpers.getTranslation('categories.schema.url'),
    unique: true,
  },
  createdAt: orion.attribute('createdAt')
}));
