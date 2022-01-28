import React, { createContext } from 'react';
import Firebase from '../Firebase/Firebase';


 export const FirebaseContext = createContext();

   
const AuthFireBaseContext = ({children}) => {








    return (
       <FirebaseContext.Provider value={Firebase()}>
        {children}
       </FirebaseContext.Provider>
    );
};

export default AuthFireBaseContext;