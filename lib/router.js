
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/dashboard');

Router.route('/calendar');

Router.route('/appointment');