import React from 'react';
import {footerInfo} from './footerInfo';
import FooterContactsItem from './../FooterContactsItem';
const FooterContacts = () => {
    const footerItems = footerInfo.map(({id, ...footerProps})=>
    <FooterContactsItem key={id} {...footerProps}/>)
    return (
        <ul className="info-contact">
            {footerItems}
        </ul>
    )
}

export default FooterContacts;