
if (Meteor.isServer) {
  Meteor.publish('appointments', function() {
    return Appointments.find();
  });
}


