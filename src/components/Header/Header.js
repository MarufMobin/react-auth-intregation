import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {storeUser,logOut} = useFirebase();
    // const {storeUser,logOut} = useAuth();
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            
            {
                <span>{storeUser.displayName } </span>
            }{ storeUser?.email && <button onClick={logOut}>Log Out</button> }
        </div>
    );
};

export default Header;