import React from 'react';
import LoginForm from "./LoginForm";
import Policy from "./Policy";

const Login = () => {
    return (
        <div>
            Войти в свой аккаунт
            <LoginForm/>
            <Policy />
        </div>
    );
};

export default Login;