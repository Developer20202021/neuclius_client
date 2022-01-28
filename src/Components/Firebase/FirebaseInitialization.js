import { initializeApp  } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";

const firebaseInitialization =()=>{

   return initializeApp(firebaseConfig);

}

export default firebaseInitialization;