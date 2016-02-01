
Meteor.methods({
  'insertAppointment': function(doc) {
    Appointments.insert(doc);
  }

});