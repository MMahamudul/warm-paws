import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({to, children, className}) => {
    return (
        <div>
            <NavLink to={to} className={({isActive})=> isActive? 'text-purple-500 text-xl': `${className}`}>{children}</NavLink>
        </div>
    );
};

export default MyLink;