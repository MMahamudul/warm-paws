import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({to, children, className}) => {
    return (
        <div>
            <NavLink to={to} className={({isActive})=> isActive? 'text-blue-900 text-xl font-bold': `${className}`}>{children}</NavLink>
        </div>
    );
};

export default MyLink;