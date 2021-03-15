  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        name: 'index',
        path: '/index/',
        url: 'index.html',
      },
      {
        name: 'home',
        path: '/home/',
        url: 'home.html',
      },
      
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {

    console.log("Device is ready!");


});

// Option 1. Using one 'page:init' handler for all pages INDEX !!!!
$$(document).on('page:init','.page[data-name="index"]', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);

    var email = $$("#emailRegistration").val();
    var password = $$("#passwordRegistration").val();
    firebase.auth().createUserWithEmailAndPassword(email, password)

    .then((user) => {
    // Signed in
    // ...
    alert("todo en orden");
    })

    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {

    alert('Clave muy débil.');

    } else {

    alert(errorMessage);

    }
    console.log(error);

    });

    alert("q paso?");
})


// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="home"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);

    
})

