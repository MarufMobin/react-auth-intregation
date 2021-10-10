import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const {singInUsingGithub,singInUsingGoogle,user,error} = useFirebase()
    // const {singInUsingGithub,singInUsingGoogle,user,error} = useAuth()
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={singInUsingGoogle}>Google Sign in</button><br /><br />
            <button onClick={singInUsingGithub}>Github Sing In</button>
            <br/>
            <Link to="/register">New User ?</Link>
        </div>
    );
};

export default Login;