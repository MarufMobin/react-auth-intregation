import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,GithubAuthProvider ,signOut  } from "firebase/auth";

initializeAuthentication()

const useFirebase = () =>{
    const auth = getAuth()
    const [ storeUser, setStoreUser ] = useState({});
    const [error, setError] = useState('');
    
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const singInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then( result =>{
            setStoreUser(result.user)
        })
        .catch(error =>{
            setError( error.massage)
        })
    };

    const singInUsingGithub = () =>{
        signInWithPopup(auth, githubProvider)
        .then( result =>{
            setStoreUser( result.user)
        })
        .catch( error =>{
            console.log(error.massage)
            setError( error.massage)
        })
    }
    const logOut = () =>{
            signOut( auth).then( () =>{
                setStoreUser({})
            }).catch( error =>{
                setError(error)
            })
    };
    
    useEffect( () => {
        onAuthStateChanged( auth, user =>{
            if(user){
                 setStoreUser(user);
            }
        })
    },[]);

    return  {
        singInUsingGoogle ,
        error, 
        storeUser,
        logOut,
        singInUsingGithub
    }
}

export default useFirebase;