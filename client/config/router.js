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

Router.route('/internal', function () {
    this.render('internal');
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

Router.route('/clientView/:id', {
    name: 'clientView',
    template: 'clientView',
    data: function() {
        if(this.params.id != null) {
            return {firstname: "Erik", lastname: "Clasie"};
        }
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

Router.route('/bookingView/:id', {
    name: 'bookingView',
    template: 'bookingView',
    data: function() {
        if(this.params.id == "1") {
            return {firstname: "Erik", lastname: "Clasie", caregiver: "Dirk", date: "03-05-2016 03:20:00"};
        }
    }
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

Router.route('/messageView/:id', {
    name: 'messageView',
    template: 'messageView',
    data: function() {
        console.log(this.params.id);
        if(this.params.id == "1") {
            return {email: "annasmith@hotmail.com", title: "Lorem ipsum dolor noretek imit set.", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it essentially unchanged."};
        } else if(this.params.id == "2") {
            return {email: "damienrits@hotmail.com", title: "Oor Lorem Ipsum is that it has a more-or-less normal.", content: "There are many variations of passages of Lorem IpsumLorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of. "};
        }
    }
});

Router.route('/accounts', function () {
    this.render('accounts');
});

Router.route('/accountView/:id', {
    name: 'accountView',
    template: 'accountView',
    data: function() {
        if(this.params.id == "1") {
            return {amount: 300, status: "Current"};
        } else if(this.params.id == "2") {
            return {amount: 700, status: "Overdue"};
        }
    }
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
