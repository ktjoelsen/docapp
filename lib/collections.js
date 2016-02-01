

Appointments = new Mongo.Collection("appointments");

Appointments.attachSchema(new SimpleSchema({
  patient: {
    type: String,
    label: "Patient"
  },
  date_of_birth: {
    type: Date,
    label: "Date of birth"
  },  
  email: {
    type: String,
    label: "Email"
  },  
  telephone: {
    type: Number,
    label: "Telephone",
    min: 0
  },
  starttime: {
    type: Date,
    label: "Start time",
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
  },
  endtime: {
    type: Date,
    label: "End time",
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
  },
  reminder_window: {
    type: Number,
    label: "Desired patient reminder window (minutes)",
    min: 0
  },  
}));