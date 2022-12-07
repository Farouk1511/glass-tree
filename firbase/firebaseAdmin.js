import * as firebaseAdmin from "firebase-admin";
import serviceAccount from "../glass-tree-23bb1-firebase-adminsdk-3hsff-7214803313.json";

if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
  });
}

export{firebaseAdmin}
