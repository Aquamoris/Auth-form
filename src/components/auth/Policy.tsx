import React from 'react';
import {Link} from "react-router-dom";
import style from './Form.module.scss';

const Policy = () => {
    return (
        <div className={style.policy}>
            Нажимая кнопку продолжить вы соглашаетесь с
            <Link to='/policy'>
                &nbsp;политикой конфиденциальности&nbsp;
            </Link>
            нашего сайта
        </div>
    );
};

export default Policy;