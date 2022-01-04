
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD6PVsjoATz-HkTgviTv_hVIGXIeabMC0c",
      authDomain: "kwitter-80410.firebaseapp.com",
      projectId: "kwitter-80410",
      storageBucket: "kwitter-80410.appspot.com",
      messagingSenderId: "958165000115",
      appId: "1:958165000115:web:05a56180f01af2fb6cf5c6"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
