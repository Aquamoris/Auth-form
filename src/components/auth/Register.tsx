import React from 'react';
import Policy from "./Policy";
import Back from "./Back";
import RegisterForm from "./RegisterForm";
import style from './Form.module.scss';

const Register = () => {
    return (
        <div className='wrapper'>
            <Back text='У меня всё-таки есть аккаунт'/>
            <h3 className={style.text}>Введите данные для регистрации</h3>
            <RegisterForm />
            <Policy />
        </div>
    );
};

export default Register;