import React from 'react'
import { Link } from 'react-router-dom';

const TopbarItem = ({id,to,title}) =>{
    return(
        <li key={id} id={id} >
            <Link to={to} className="site-button-link">
                {title}
            </Link>
        </li>
    )
}

export default TopbarItem 
