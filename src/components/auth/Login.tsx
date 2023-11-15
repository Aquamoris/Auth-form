import React from 'react';
import LoginForm from "./LoginForm";
import Policy from "./Policy";
import '../../styles/global.scss'
import style from './Form.module.scss';

const Login = () => {
    return (
        <div className='wrapper'>
            <h3 className={style.text}>Войти в свой аккаунт</h3>
            <LoginForm/>
            <Policy />
        </div>
    );
};

export default Login;