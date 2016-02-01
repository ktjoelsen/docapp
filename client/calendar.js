
// Add modal window on click,
// http://www.mikesmithdev.com/blog/fullcalendar-event-details-with-bootstrap-modal/


Template.calendar.helpers({
  options: function() {    

    var appointmentEvents = [];
    Appointments.find().forEach(function (appointment) {
      appointmentEvents.push({
        title: appointment.patient,
        start: appointment.starttime.toJSON(),
        end: appointment.endtime.toJSON()
      });
    });

    return {
        defaultView: 'agendaDay',
        events: appointmentEvents
    };
  }

});