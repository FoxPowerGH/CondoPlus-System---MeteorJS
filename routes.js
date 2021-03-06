RouterLayer.route('/', {
  name: 'home',
  template: 'home',
  layout: 'layout',
});

RouterLayer.route('/events', {
  name: 'events',
  template: 'events',
  layout: 'layout',
});

RouterLayer.route('/bulletin', {
  name: 'post',
  template: 'post',
  layout: 'layout',
});

RouterLayer.route('/bulletin/:postId?', {
  name: 'postsdetail',
  template: 'postdetail',
  layout: 'layout',
});

RouterLayer.route('/contacto', {
  name: 'contact',
  template: 'contact',
  layout: 'layout',
});

RouterLayer.route('/about', {
  name: 'about',
  template: 'about',
  layout: 'layout',
});

RouterLayer.route('/admin/my-account', {
  name: 'account',
  template: 'account',
  layout: 'layout',
});


RouterLayer.route('/venta/:productId?', {
  name: 'products.index',
  template: 'productsIndex',
  layout: 'layout',
});

RouterLayer.route('/:url/:imageId?', {
  name: 'work',
  template: 'work',
  layout: 'layout',
});
