const BucketlistFormView = require('./views/bucketlist_form_view.js')
const BucketlistLayoutView = require('./views/bucketlist_layout_view.js');
const Bucketlist = require('./models/bucketlist.js');

document.addEventListener('DOMContentLoaded', () => {
  const bucketlistForm = document.querySelector('form#bucketlist-form');
  const bucketlistFormView = new BucketlistFormView(bucketlistForm);
  bucketlistFormView.bindEvents();

  const bucketlistContainer = document.querySelector('div#full-list');
  const bucketlistLayoutView = new BucketlistLayoutView(bucketlistContainer);
  bucketlistLayoutView.bindEvents();

  const bucketlist = new Bucketlist();
  bucketlist.bindEvents();
  bucketlist.getData();
});
