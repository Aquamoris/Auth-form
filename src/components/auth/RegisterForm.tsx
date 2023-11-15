import React from 'react';
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import YupPassword from "yup-password";
import {passwordValid, requiredError} from "../utils/ValidateMessages";
YupPassword(Yup);

interface MyFormValues {
    username: string,
    email: string,
    password: string,
    repPassword: string
}

const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .required(requiredError('имя пользователя')),
    email: Yup.string()
        .email('Введите кореектный email адрес')
        .required(requiredError('email')),
    password: Yup.string()
        .min(8, 'Слишком короткий пароль')
        .minLowercase(1, passwordValid('латинскую букву'))
        .minUppercase(1, passwordValid('заглаваную латинскую букву'))
        .minNumbers(1, passwordValid('цифру'))
        .minSymbols(1, passwordValid('символ'))
        .required(requiredError('пароль')),
    repPassword: Yup.string()
        .required(requiredError('повтор пароля'))
        .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
})

const LoginForm = () => {
    const initialValues: MyFormValues = {
        username: '',
        email: '',
        password: '',
        repPassword: ''
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
                    <label htmlFor="username">Имя пользователя</label>
                    <Field id="username" name="username" placeholder="Введите логин" />
                    {errors.username && touched.username
                        ? <div>{errors.username}</div>
                        : null}

                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" placeholder="Введите логин" />
                    {errors.email && touched.email
                        ? <div>{errors.email}</div>
                        : null}

                    <label htmlFor="password">Пароль</label>
                    <Field id="password" name="password" placeholder="Введите пароль" type='password' />
                    {errors.password && touched.password
                        ? <div>{errors.password}</div>
                        : null}

                    <label htmlFor="repPassword">Повторите пароль</label>
                    <Field id="repPassword" name="repPassword" placeholder="Введите пароль" type='password' />
                    {errors.repPassword && touched.repPassword
                        ? <div>{errors.repPassword}</div>
                        : null}


                    <button type="submit">Продолжить</button>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;