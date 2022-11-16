import firebase from "firebase";
import 'firebase/firestore'

if(!firebase.apps.length){

    firebase.initializeApp({
        apiKey: "AIzaSyC5_SVBLQPz9DfTBpTxdgGuK8l-x9x8LhI",
    authDomain: "next-crud-3b3c1.firebaseapp.com",
    projectId: "next-crud-3b3s5",
    storageBucket: "next-crud-3b3c1.appspot.com",
    messagingSenderId: "389517646113",
    appId: "1:389517646113:web:6d5686d2523acac5090660"
    })


}

export default firebase


