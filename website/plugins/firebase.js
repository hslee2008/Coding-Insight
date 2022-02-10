import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore';

let app = firebase.initializeApp({
  apiKey: 'AIzaSyCNf5AqNPVttC9agA5rUNhi9VZ1MweswnU',
  authDomain: 'coding-insight-login.firebaseapp.com',
  projectId: 'coding-insight-login',
  storageBucket: 'coding-insight-login.appspot.com',
  messagingSenderId: '769560282450',
  appId: '1:769560282450:web:2ebdd581d37bde337e668b',
  measurementId: 'G-ZG401L45EQ',
} );

export default firebase;
