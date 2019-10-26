import * as firebase from "firebase/app";
import "firebase/messaging";

import keys from "./keys";

const initializedFirebaseApp = firebase.initializeApp(keys.firebaseConfig);
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
  // Project Settings => Cloud Messaging => Web Push certificates
  "BNFnyQNLc8VJJaI-ota8Q3zt8XKJgl9aDGgjC4229XIjlH568nbb4140bgho6O9d72FOWULIkYYiupdCpmyuA3Y"
);
export { messaging };
