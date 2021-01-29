import React from 'react'
import TopbarItem from './../TopbarItem';
import {topbarLeft,topbarRight} from './TopbarList';
const Topbar = () => {

    const topbarLeftElements = topbarLeft.map(({id, ...menuItemProps}) => 
        <TopbarItem key={id} {...menuItemProps} />);

    const topbarRightElements = topbarRight.map(({id, ...menuItemProps}) => 
        <TopbarItem key={id} {...menuItemProps} />);
    return (
        <div className="row d-flex justify-content-between">
            <div className="dlab-topbar-left">
                <ul>
                    {topbarLeftElements}
                </ul>
            </div>
            <div className="dlab-topbar-right top-login">
                <ul>
                    {topbarRightElements}
                    
                </ul>
            </div>
        </div>
    )
}

export default Topbar