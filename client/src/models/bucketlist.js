const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Bucketlist = function (url) {
  this.url = 'http://localhost:3000/api/to_do';
  this.request = new Request(this.url);
};

Bucketlist.prototype.bindEvents = function () {
  PubSub.subscribe('BucketlistView:activity-deleted', (evt) => {
    this.deleteActivity(evt.detail);
  });

  PubSub.subscribe('BucketlistFormView:new-submitted', (evt) => {
    this.postActivity(evt.detail);
  });

};

Bucketlist.prototype.getData = function () {
  this.request.get()
    .then((activities) => {
      PubSub.publish('Bucketlist:data-loaded', activities);
    })

  // .then(activities => PubSub.publish('Bucketlist:data-loaded', activities));
    .catch(console.error);
};

Bucketlist.prototype.postActivity = function (activity) {
  this.request.post(activity)
  .then((activities) => {
    PubSub.publish('Bucketlist:data-loaded', activities);
  })
  .catch(console.error);
};

Bucketlist.prototype.deleteActivity = function (activityID) {
  this.request.delete(activityID)
    .then((activities) => {
      PubSub.publish('Bucketlist:data-loaded', activities);
    })
    .catch(console.error);
};

module.exports = Bucketlist;
