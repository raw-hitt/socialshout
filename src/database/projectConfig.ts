
import { iconnections } from "./iconnection"

import { FirebaseCon } from "./firebase"


import fb from "./firebaseConfig"


export function Connection(): iconnections {
    return new FirebaseCon(fb);
}


