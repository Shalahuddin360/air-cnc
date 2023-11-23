import React from 'react';
import { Link } from 'react-router-dom';
const EmptyState = ({message,address,label}) => {
    return (
        <div>
            <p>message</p>
            <Link to={address}>label</Link>
        </div>
    );
};

export default EmptyState;