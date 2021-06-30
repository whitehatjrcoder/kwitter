
var firebaseConfig = {
    apiKey: "AIzaSyBpZkCbF7z_pUgbjF2AA2VDQYdG8UBbQns",
    authDomain: "kwitter-909fb.firebaseapp.com",
    projectId: "kwitter-909fb",
    storageBucket: "kwitter-909fb.appspot.com",
    messagingSenderId: "484421648983",
    appId: "1:484421648983:web:afd530ef29eaa7703f9912",
    measurementId: "G-BXGBGXB2YQ"
  };

  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;

    });});}
getData();
