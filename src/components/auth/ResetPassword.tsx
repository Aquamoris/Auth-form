import React from 'react';
import Back from "./Back";
import style from "./Form.module.scss";
import ResetPasswordForm from "./ResetPasswordForm";
import Policy from "./Policy";

const ResetPassword = () => {
    return (
        <div className='wrapper'>
            <Back text='Вспомнил пароль' />
            <h3 className={style.text}>Восстановить пароль</h3>
            <ResetPasswordForm />
            <Policy />
        </div>
    );
};

export default ResetPassword;