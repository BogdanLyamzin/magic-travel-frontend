import React,{useState} from "react";

import HeaderMenuItem from "../HeaderMenuItem";

import "./HeaderMenu.scss";

import {menu} from "./menu";

const HeaderMenu = ()=> {
    const [showId,setShowId] = useState(null)
    const setClass = (id) =>{ 
        return id === showId ? setShowId(null) : setShowId(id)
        }
    const menuElements = menu.map(({id, ...menuItemProps}) => 
        <HeaderMenuItem key={id} {...menuItemProps} id={id} onClick={setClass} show={showId}/>);
    return (
        <ul className="nav navbar-nav">
            {menuElements}
        </ul>
    )
};

export default HeaderMenu;