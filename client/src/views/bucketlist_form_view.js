const PubSub = require('../helpers/pub_sub.js')

const BucketlistFormView = function (form) {
  this.form = form;
};

BucketlistFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

BucketlistFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newActivity = this.createActivity(evt.target);
  // console.log(newActivity);
  PubSub.publish('BucketlistFormView:new-submitted', newActivity)
  evt.target.reset(); // clears form fields
};


BucketlistFormView.prototype.createActivity = function (form) {
  const newActivity = {
    activity: form.activity.value,
    location: form.location.value
  }
  return newActivity;
};

module.exports = BucketlistFormView;
