Meteor.publish( 'appointments', function() {
  return Appointments.find();
});
Meteor.publish( 'events', function() {
  return Events.find();
});
