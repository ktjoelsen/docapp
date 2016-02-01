
if (Meteor.isClient) {
  Meteor.subscribe('appointments');
  Meteor.subscribe('events');
}