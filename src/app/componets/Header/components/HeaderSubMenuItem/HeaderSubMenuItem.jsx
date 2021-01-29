import React from "react";
import { Link } from 'react-router-dom';

const HeaderSubMenuItem = ({title, to,id})=> {
    const newIcon = <span className="new-page menu-new">New</span>;
    return (
        <li key={id} id={id} >
            <Link to={to} className="dez-page">
                {title}
                {title === 'Listing' ? newIcon : to === '/register2' ? newIcon : title === 'Home 2' ? newIcon : ''}
            </Link>
        </li>
    )
};

export default HeaderSubMenuItem;