import YupPassword from "yup-password";
import * as Yup from "yup";
import {requiredError, passwordError} from "./ValidateMessages";
YupPassword(Yup);

export const usernameValid = Yup.string()
    .required(requiredError('имя пользователя'));
export const emailValid = Yup.string()
    .email('Введите кореектный email адрес')
    .required(requiredError('email'));

export const passwordValid = Yup.string()
    .min(8, 'Слишком короткий пароль')
    .minLowercase(1, passwordError('латинскую букву'))
    .minUppercase(1, passwordError('заглаваную латинскую букву'))
    .minNumbers(1, passwordError('цифру'))
    .minSymbols(1, passwordError('символ'))
    .required(requiredError('пароль'));

export const repeatPassword = Yup.string()
    .required(requiredError('повтор пароля'))
    .oneOf([Yup.ref('password')], 'Пароли должны совпадать');