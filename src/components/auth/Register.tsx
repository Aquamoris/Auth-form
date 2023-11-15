import React from 'react';
import Policy from "./Policy";
import Back from "./Back";
import RegisterForm from "./RegisterForm";

const Register = () => {
    return (
        <div>
            <Back text='У меня всё-таки есть аккаунт'/>
            <div>
                Введите данные для регистрации
            </div>
            <RegisterForm />
            <Policy />
        </div>
    );
};

export default Register;