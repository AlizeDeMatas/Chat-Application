//import React from 'react';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBWK6-hv5kpWDFMqTzGSH_E2p8RdC0VMIA",
    authDomain: "chatbox-3700f.firebaseapp.com",
    databaseURL: "https://chatbox-3700f.firebaseio.com",
    projectId: "chatbox-3700f",
    storageBucket: "chatbox-3700f.appspot.com",
    messagingSenderId: "39962365993",
    appId: "1:39962365993:web:fd3cdd61a777d2c49d8c38",
    measurementId: "G-CQ16MCR6F2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase; 