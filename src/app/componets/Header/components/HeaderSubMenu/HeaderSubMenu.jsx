import React from "react";

import HeaderSubMenuItem from "../HeaderSubMenuItem";


const HeaderSubMenu = ({menu,show})=> {

    const submenuElements = menu.map(({id, ...menuItemProps}) => 
        <HeaderSubMenuItem key={id} {...menuItemProps} id={id} show={show}/>)
    return (
        <ul className="sub-menu">
            {submenuElements}
        </ul>
    )
};

export default HeaderSubMenu;