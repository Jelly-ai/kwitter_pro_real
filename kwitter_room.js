var firebaseConfig = {
  apiKey: "AIzaSyAGUh1QG06IDUH7_XXRC50lz8ZxKJXgwLI",
  authDomain: "kwitter-reupload.firebaseapp.com",
  databaseURL: "https://kwitter-reupload-default-rtdb.firebaseio.com",
  projectId: "kwitter-reupload",
  storageBucket: "kwitter-reupload.appspot.com",
  messagingSenderId: "650864129954",
  appId: "1:650864129954:web:bb26bf6996326f4d94a4fb",
  measurementId: "G-53MG44YJ05"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
  room_name = document.getElementById("room_name").value
  firebase.database().ref("/").child(room_name).update({
purpose:"Adding Room Name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
} 
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }
getData();

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location="kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
window.location= "index.html";
}