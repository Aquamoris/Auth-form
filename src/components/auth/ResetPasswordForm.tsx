import React from 'react';
import {Field, Form, Formik} from "formik";
import style from "./Form.module.scss";
import * as Yup from "yup";
import {requiredError} from "../../utils/ValidateMessages";

interface MyFormValues {
    email: string
}

const ResetSchema = Yup.object().shape({
    email: Yup.string()
        .email('Введите кореектный email адрес')
        .required(requiredError('email')),
})

const ResetPasswordForm = () => {
    const initialValues: MyFormValues = {
        email: ''
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={ResetSchema}
            onSubmit={(values, actions) => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
                actions.resetForm();
            }}
        >
            {({errors, touched}) => (
            <Form className={style.form}>
                <label htmlFor="email">Электронная почта</label>
                <Field className={style.inputField} id="email" name="email" placeholder="Введите электронную почту" />
                {errors.email && touched.email
                    ? <div className={style.error}>{errors.email}</div>
                    : null}

                <button className={style.submitButton} type='submit'>Продолжить</button>
            </Form>
            )}
        </Formik>
    );
};

export default ResetPasswordForm;