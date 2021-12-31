
const firebaseConfig = {
      apiKey: "AIzaSyDvgnXC7C4CXKePY-7rf8wrtQnq5m_RLcg",
      authDomain: "chatter-ac82c.firebaseapp.com",
      databaseURL: "https://chatter-ac82c-default-rtdb.firebaseio.com",
      projectId: "chatter-ac82c",
      storageBucket: "chatter-ac82c.appspot.com",
      messagingSenderId: "240871150321",
      appId: "1:240871150321:web:0332a211ed5b027aaa8f50",
      measurementId: "G-ZW8YSJQL2W"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";
          
     function addRoom()
     {
           room_name = document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
                 purpose : "adding room name"
           });
           localStorage.setItem("room_name", room_name);
           window.location = "witter_page.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="Room_names+" onclick='redirectToRoomName(this.Ad)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
