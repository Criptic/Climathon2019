import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDKbdcpMwqVPM1rig0Dqk-LJ9szxcek5z8",
  authDomain: "climathon2019-35374.firebaseapp.com",
  databaseURL: "https://climathon2019-35374.firebaseio.com",
  projectId: "climathon2019-35374",
  storageBucket: "climathon2019-35374.appspot.com",
  messagingSenderId: "465815568361",
  appId: "1:465815568361:web:779c650b2485ef1024d578",
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
  // Project Settings => Cloud Messaging => Web Push certificates
  "BNFnyQNLc8VJJaI-ota8Q3zt8XKJgl9aDGgjC4229XIjlH568nbb4140bgho6O9d72FOWULIkYYiupdCpmyuA3Y"
);
export { messaging };
