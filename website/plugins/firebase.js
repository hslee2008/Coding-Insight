import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import apiKey from './apikey.js';

firebase.initializeApp( apiKey );

export const auth = firebase.auth();
export const db = firebase.database();
export default firebase;
