import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBqtpUdIPi1n6yNj8D9C0admRcu0Wei3Is',
  authDomain: 'advice-app-75c15.firebaseapp.com',
  projectId: 'advice-app-75c15',
  storageBucket: 'advice-app-75c15.appspot.com',
  messagingSenderId: '548447855070',
  appId: '1:548447855070:web:9e6156e654fb7bed94bd4f',
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
