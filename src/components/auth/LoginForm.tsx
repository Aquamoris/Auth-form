import React from 'react';
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import YupPassword from "yup-password";
import {Link} from "react-router-dom";
import {passwordValid, requiredError} from "../utils/ValidateMessages";
YupPassword(Yup);

interface MyFormValues {
    login: string,
    password: string,
    rememberMe: boolean
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
    const initialValues: MyFormValues = {
        login: '',
        password: '',
        rememberMe: false
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={(values, actions) => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <label htmlFor="login">Email</label>
                    <Field id="login" name="login" placeholder="Введите логин" />
                    {errors.login && touched.login
                        ? <div>{errors.login}</div>
                        : null}

                    <label htmlFor="password">Пароль</label>
                    <Field id="password" name="password" placeholder="Введите пароль" type='password' />
                    {errors.password && touched.password
                        ? <div>{errors.password}</div>
                        : null}

                    <label htmlFor="rememberMe">Запомнить меня</label>
                    <Field id="rememberMe" name="rememberMe" type='checkbox' />

                    <button type="submit">Продолжить</button>

                    <div>
                        Нет аккуаунта? <Link to='/register'>Зарегистрироваться</Link>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;