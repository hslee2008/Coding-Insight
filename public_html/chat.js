const firebaseConfig = {
  apiKey: "AIzaSyBDZDp_ZA-5CItCIKZBmU4zSJ7BzBuoM4Q",
  authDomain: "pythonfac.firebaseapp.com",
  projectId: "pythonfac",
  storageBucket: "pythonfac.appspot.com",
  messagingSenderId: "245956452130",
  appId: "1:245956452130:web:d28acb7415e88605a24f7b",
  measurementId: "G-YXL60PTGXW"
};

firebase.initializeApp( firebaseConfig );
//INIT

//DATABASE
const db = firebase.database();

document.getElementById( "message-form" ).addEventListener( "submit", sendMessage );

//Users
var username;

localStorage.getItem( "@@@usernamepythonfactory" ) !== null ? username = localStorage.getItem( "@@@usernamepythonfactory" ) : (
  username = prompt( "당신의 이름을 입력하세요: " ),
  localStorage.setItem( "@@@usernamepythonfactory", username )
)
//Users
function sendMessage( e ) {
  e.preventDefault();

  const timestamp = Date.now();
  const messageInput = document.getElementById( "message-input" );
  const message = messageInput.value;

  messageInput.value = "";
  document
    .getElementById( "messages" )
    .scrollIntoView( {
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    } );

  db.ref( "messages/" + timestamp ).set( {
    username,
    message,
  } );
}

const fetchChat = db.ref( "messages/" );

fetchChat.on( "child_added", function ( snapshot ) {
  const messages = snapshot.val();
  const message = `<li class=${ username === messages.username ? "sent" : "receive" }><span>${messages.username}:
      </span>${messages.message}</li>`;
  document.getElementById( "messages" ).innerHTML += message;
} );
