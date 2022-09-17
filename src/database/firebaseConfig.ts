/*@ts-ignore */
import firebase from 'firebase'
import 'firebase/firestore'


// const firebaseConfig = {
//     apiKey: "AIzaSyCPpBeb37h-ZIGXkSUwd_dADNSd-cb_2-I",
//     authDomain: "shout-f434f.firebaseapp.com",
//     databaseURL: "https://shout-f434f.firebaseio.com",
//     projectId: "shout-f434f",
//     storageBucket: "shout-f434f.appspot.com",
//     messagingSenderId: "739298881394",
//     appId: "1:739298881394:web:754cb659da71cfc20837eb",
//     measurementId: "G-111KPGN9WJ"
// };


const firebaseConfig = {
    apiKey: "AIzaSyCPpBeb37h-ZIGXkSUwd_dADNSd-cb_2-I",
    authDomain: "shout-f434f.firebaseapp.com",
    databaseURL: "https://shout-f434f.firebaseio.com",
    projectId: "shout-f434f",
    storageBucket: "shout-f434f.appspot.com",
    messagingSenderId: "739298881394",
    appId: "1:739298881394:web:754cb659da71cfc20837eb",
    measurementId: "G-111KPGN9WJ"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;