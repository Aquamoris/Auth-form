import React, {FC} from 'react';
import {Link} from "react-router-dom";
import style from './Form.module.scss';

interface Props {
    text: string
}

const Back:FC<Props> = ({text}) => {
    return (
        <div className={style.back}>
            <Link to='/'>
                ← {text}
            </Link>
        </div>
    );
};

export default Back;