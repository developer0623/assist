Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'

});

//
// Dashboards routes
//

Router.route('/dashboard', function () {
    this.render('dashboard');
});

Router.route('/clients', {
    name: 'clients',
    waitOn: function() {
        return Meteor.subscribe('clients');
    },
    data: function() {
        var clients = Clients.find({});
        return {clients: clients};
    }
});

Router.route('/addClient', function () {
    this.render('addClient');
});

Router.route('/bookService', function () {
    this.render('bookService');
});

Router.route('/searchCareGiver', function () {
    this.render('searchCareGiver');
});

Router.route('/careGiver', function () {
    this.render('careGiver');
});

Router.route('/bookings', function () {
    this.render('bookings');
});

Router.route('/notifications', function () {
    this.render('notifications');
});

Router.route('/notificationAccepted', function () {
    this.render('notificationAccepted');
});

Router.route('/messages', function () {
    this.render('messages');
});

Router.route('/messageView', function () {
    this.render('messageView');
});

Router.route('/accounts', function () {
    this.render('accounts');
});

Router.route('/settings', function () {
    this.render('settings');
});

//
// Forms
//

Router.route('/formBasic', function () {
    this.render('formBasic');
});

Router.route('/formAdvanced', function () {
    this.render('formAdvanced');
});

Router.route('/formWizard', function () {
    this.render('formWizard');
});

Router.route('/formUpload', function () {
    this.render('formUpload');
});

Router.route('/textEditor', function () {
    this.render('textEditor');
});

Router.route('/markdown', function () {
    this.render('markdown');
});

//
// Other pages
//

Router.route('/searchResult', function () {
    this.render('searchResult');
});

Router.route('/lockScreen', function () {
    this.render('lockScreen');
    this.layout('blankLayout')
});

Router.route('/invoice', function () {
    this.render('invoice');
});

Router.route('/invoicePrint', function () {
    this.render('invoicePrint');
    this.layout('blankLayout')
});

Router.route('/login', function () {
    this.render('login');
    this.layout('blankLayout');
});

Router.route('/loginTwo', function () {
    this.render('loginTwo');
    this.layout('blankLayout')
});

Router.route('/forgotPassword', function () {
    this.render('forgotPassword');
    this.layout('blankLayout')
});

Router.route('/register', function () {
    this.render('register');
    this.layout('blankLayout')
});

Router.route('/errorOne', function () {
    this.render('errorOne');
    this.layout('blankLayout')
});

Router.route('/errorTwo', function () {
    this.render('errorTwo');
    this.layout('blankLayout')
});

Router.route('/emptyPage', function () {
    this.render('emptyPage');
});

//
// Landing page
//

Router.route('/landing', function () {
    this.render('landing');
    this.layout('blankLayout')
});

//
// Other pages routes
//
Router.route('/notFound', function () {
    this.render('notFound');
});

// Default route
// You can use direct this.render('template')
// We use Router.go method because dashboard1 is our nested view in menu
Router.route('/', function () {
    Router.go('dashboard');
});

var Router_BeforeActionHooks = {
    isLoggedIn: function(){
        if(!Meteor.user()){
            if (Meteor.loggingIn()){
            }
            else {
                Router.go('login');
            }
        }
        else if(!(Meteor.loggingIn() || Meteor.user())){
            Router.go('login');
        }
        else {
            this.next();
        }
    }
};

Router.onBeforeAction(Router_BeforeActionHooks.isLoggedIn, {except: ['login', 'register']});
