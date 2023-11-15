import React, {FC} from 'react';
import {Link} from "react-router-dom";

interface Props {
    text: string
}

const Back:FC<Props> = ({text}) => {
    return (
        <Link to='/'>
            ← {text}
        </Link>
    );
};

export default Back;