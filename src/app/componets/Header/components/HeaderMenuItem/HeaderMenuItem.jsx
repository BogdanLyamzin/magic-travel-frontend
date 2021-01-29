import React from "react";
import HeaderSubMenu from './../HeaderSubMenu/HeaderSubMenu'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const HeaderMenuItem = ({title, to = '', submenu,id,onClick,show})=> {
    const submenuElement = submenu && <HeaderSubMenu menu={submenu} />;
    return (
        <li onClick={()=>onClick(id)} className={show === id ? 'open' : ''} key={id} id={id}>
            <span className='header-submenu-item'>
                {title}
                {title === 'Contact Us' ? '' : <FontAwesomeIcon icon={show === id ? faChevronRight : faChevronDown} />}
            </span>
            {submenuElement}
        </li>
    )
};

export default HeaderMenuItem;