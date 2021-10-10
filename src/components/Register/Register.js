import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div>
            <h1>Please Register</h1>
            <form>
                <input type="email" />
                <br /><br />
                <input type="password" />
                <br /><br />
                <input type="submit" value="Register" />

            </form>
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;