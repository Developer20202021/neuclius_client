import firebaseInitialization from "./FirebaseInitialization"
import { getAuth, createUserWithEmailAndPassword ,onAuthStateChanged } from "firebase/auth";
import { getStorage,getDownloadURL, ref,uploadBytes } from "firebase/storage"
import { useEffect, useState } from "react";
const firebaseInitial = firebaseInitialization();



const Firebase = ()=>{


      const [user, setUser] = useState('');  

      const [checked, setChecked] = useState(false);
  

    const auth = getAuth();
    

    const storage = getStorage(firebaseInitial, 'gs://neuclius-2b003.appspot.com');




    const register = ()=>{

        return createUserWithEmailAndPassword


    }



    







    useEffect(()=>{


      const unsubscribe =  onAuthStateChanged( auth, (user)=>{

                if (user) {
                  setUser(user) 
                  console.log(user); 
                }
                else{
                    setUser(' ')
                }


        })



        unsubscribe()


    },[])


    




    return {
        storage,
        register,
        user, 
        setUser,
        setChecked,
        checked

        
       
    }


}



export default Firebase;