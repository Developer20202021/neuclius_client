import { useContext } from "react"
import { FirebaseContext } from "./AuthContext"



const UseFirebaseAuth = ()=>{

        return useContext(FirebaseContext);

}

export default UseFirebaseAuth;