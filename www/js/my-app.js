  
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
        path: '/about/',
        url: 'about.html',
      },
      {
        path: '/home/',
        url: 'home.html',
      },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');
var datosGlobal = "";

var db = firebase.firestore();




// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");


});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
    
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
    
    $$('#btnLogin').on('click', fnLogin);
    $$('#btnIndex').on('click', fnRegistro);
    
})


function fnRegistro() {
    em = $$('#emailRegistration').val();
    pa = $$('#passwordRegistration').val();


    firebase.auth().createUserWithEmailAndPassword(em, pa)
        .then( function() {
          alert("registro ok");
          app.popup.close(".popup-registro");
          app.views.main.router.navigate("/home/");
            
        })

        .catch(function(error) {          
        // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message; 
            if (errorCode == 'auth/weak-password') { 
                alert('Clave muy débil.');
            } else {
                alert(errorCode + "|" + errorMessage);
            }
            console.log(error);
        });
      
        
}


function fnLogin() {
    email = $$('#emailLogin').val();
    password = $$('#passwordLogin').val();

    firebase.auth().signInWithEmailAndPassword(email, password)

      .then((user) => {
        app.views.main.router.navigate("/home/");
        
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/user-not-found') { 
                alert('Clave o contraseña incorrecta');
            } else {
                (errorCode == 'auth/invalid-email')
                alert("Por favor escriba bien su Email");
            }
            conso
        alert(errorCode);
      });

}






