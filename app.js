function send() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
  //alert("email="+email+"pass="+pass)
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert(errorMessage);
    });
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    document.getElementById("login").innerHTML =
      "Registrado" + " " + user.email;
    console.log(user);
    // ...
  } else {
    // User is signed out.
    // ...
    document.getElementById("login").innerHTML = "No registrado";
  }
});

function access() {
  var emailA = document.getElementById("emailA").value;
  var passwordA = document.getElementById("passA").value;
  //alert("email="+email+"pass="+pass)
  firebase
    .auth()
    .signInWithEmailAndPassword(emailA, passwordA)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert(errorMessage);
    });
}
