import * as firebaseAdmin from "firebase-admin";
// import serviceAccount from "../glass-tree-23bb1-firebase-adminsdk-3hsff-7214803313.json";

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY
);

// console.log(typeof  process.env.FIREBASE_SERVICE_ACCOUNT_KEY)

if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
  });
}

export{firebaseAdmin}
