getUserLanguage = function() {
  return 'es';
};

if (Meteor.isClient) {
  Meteor.startup(function() {
    //T9n.setLanguage(getUserLanguage());
    TAPi18n.setLanguage(getUserLanguage())
    .done(function() {

    })
    .fail(function(errorMessage) {
      console.log(errorMessage);
    });
  });

  /**
   * Here we create our localization
   */

  i18n.map('en', {
    accountsPictureLabel: 'Picture',
    accountsNameLabel: 'Name',
    dictionary: {
      images: {
        logo: 'Site Logo',
      },
      public: {
        homeText: 'The text on the home',
      },
    },
    posts: {
      singularName: 'post',
      pluralName: 'posts',
      title: 'Posts',
      schema: {
        index: 'Index',
        title: 'Title',
        image: 'Image',
        body: 'Body',
        categoryId: 'Category',
        createdBy: 'Created By',
        createdAt: 'Created At',
      },
    },
    categories: {
      singularName: 'category',
      pluralName: 'categories',
      title: 'Category',
      schema: {
        index: 'Index',
        name: 'Name',
        url: 'URL',
        createdAt: 'Created At',
      },
    },
  });

  i18n.map('es', {
    accountsPictureLabel: 'Foto',
    accountsNameLabel: 'Nombre',
    dictionary: {
      images: {
        logo: 'Logo del sitio',
      },
      public: {
        homeText: 'El texto en el inicio',
      },
    },
    posts: {
      singularName: 'publicación',
      pluralName: 'publicaciones',
      title: 'Publicaciones',
      schema: {
        index: 'Lugar',
        title: 'Título',
        image: 'Imagen',
        body: 'Contenido',
        categoryId: 'Categoría',
        createdBy: 'Creado Por',
        createdAt: 'Creado En',
      },
    },
    categories: {
      singularName: 'categoría',
      pluralName: 'categorías',
      title: 'Categoría',
      schema: {
        index: 'Lugar',
        name: 'Nombre',
        url: 'URL',
        createdAt: 'Creado En',
      },
    },
  });
}
