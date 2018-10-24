const PubSub = require('../helpers/pub_sub.js');

const BucketlistView = function (container) {
  this.container = container;
};

BucketlistView.prototype.render = function (bucketlistItem) {
  const bucketlistContainer = document.createElement('div');
  bucketlistContainer.id = 'bucketlist-item';

  const activity = this.createHeading(bucketlistItem.activity);
  bucketlistContainer.appendChild(activity);

  const location = this.createDetail('Location', bucketlistItem.location);
  bucketlistContainer.appendChild(location);

  const deleteButton = this.createDeleteButton(bucketlistItem._id);
  bucketlistContainer.appendChild(deleteButton);

  this.container.appendChild(bucketlistContainer);
};

BucketlistView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

BucketlistView.prototype.createDetail = function (label, text) {
  const detail = document.createElement('p');
  detail.textContent = `${label}: ${text}`;
  return detail;
};

BucketlistView.prototype.createDeleteButton = function (activityID) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = activityID;

  button.addEventListener('click', (evt) => {
    PubSub.publish('BucketlistView:activity-deleted', evt.target.value);
  });

  return button;
};

module.exports = BucketlistView;
