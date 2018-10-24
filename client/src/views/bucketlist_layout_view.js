const PubSub = require('../helpers/pub_sub.js');
const BucketlistView = require('./bucketlist_view.js');

const BucketlistLayoutView = function (container) {
  this.container = container;
};

BucketlistLayoutView.prototype.bindEvents = function () {
  PubSub.subscribe('Bucketlist:data-loaded', (evt) => {
    this.render(evt.detail);
  });
};

BucketlistLayoutView.prototype.render = function (activities) {
  this.container.innerHTML = '';
  const bucketlistView = new BucketlistView(this.container);
  activities.forEach((activity) => bucketlistView.render(activity));
};

module.exports = BucketlistLayoutView;
