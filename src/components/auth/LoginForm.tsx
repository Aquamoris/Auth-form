import React, {useState} from 'react';
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import YupPassword from "yup-password";
import {Link} from "react-router-dom";
import {passwordValid, requiredError} from "../../utils/ValidateMessages";
import style from './Form.module.scss';
import show from '../../assets/images/showPassword.png';
YupPassword(Yup);

interface MyFormValues {
    login: string,
    password: string,
    rememberMe: boolean,
    showPassword: boolean
}

const LoginSchema = Yup.object().shape({
    login: Yup.string()
        .email('Введите действующий email адрес')
        .required(requiredError('логин')),
    password: Yup.string()
        .min(8, 'Слишком короткий пароль')
        .minLowercase(1, passwordValid('латинскую букву'))
        .minUppercase(1, passwordValid('заглаваную латинскую букву'))
        .minNumbers(1, passwordValid('цифру'))
        .minSymbols(1, passwordValid('символ'))
        .required(requiredError('пароль')),
})

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const initialValues: MyFormValues = {
        login: '',
        password: '',
        rememberMe: false,
        showPassword: false
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={(values, actions) => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
                actions.resetForm();
            }}
        >
            {({ errors, touched, values }) => (
                <Form className={style.form}>
                    <label htmlFor="login">Email</label>
                    <Field className={style.inputField} id="login" name="login" placeholder="Введите логин" />
                    {errors.login && touched.login
                        ? <div className={style.error}>{errors.login}</div>
                        : null}

                    <div className={style.passwordSettings}>
                        <label htmlFor="password">Пароль</label>
                        <img src={show} onClick={() => setShowPassword(!showPassword)} alt={show}/>
                    </div>
                    <Field type={showPassword ? 'text' : 'password'}
                        className={style.inputField} id="password" name="password" placeholder="Введите пароль"
                    />
                    {errors.password && touched.password
                        ? <div className={style.error}>{errors.password}</div>
                        : null}

                    <div className={style.rememberMe}>
                        <label htmlFor="rememberMe">Запомнить меня</label>
                        <Field id="rememberMe" name="rememberMe" type='checkbox' />
                    </div>

                    <button className={style.submitButton} type="submit">Продолжить</button>

                    <div className={style.text}>
                        Нет аккуаунта? <Link to='/register'>Зарегистрироваться</Link>
                    </div>
                    <div className={style.text}>
                        <Link to='/register'>Восстановить пароль</Link>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;