import React from 'react';
import {Link} from "react-router-dom";

const Policy = () => {
    return (
        <div>
            Нажимая кнопку продолжить вы соглашаетесь с
            <Link to='/policy'>
                политикой конфиденциальности
            </Link>
            нашего сайта
        </div>
    );
};

export default Policy;