import React from 'react'
import FooterInlineIconsItems from './../FooterInlineIconsItems'
import {inlineIcons} from './inlineIcons';
import FooterContacts from './../FooterContacts';
const FooterInlineIcons = () => {
    const inlineIconsItems = inlineIcons.map(({id, ...footerProps})=>
    <FooterInlineIconsItems key={id} {...footerProps}/>)
    return(
        <div className="col-lg-3 col-md-6 col-sm-5 footer-col-4">
            <div className="widget widget_getintuch">
                <h6 className="m-b15 h6 text-uppercase">TRAVEL</h6>
                <div className="dlab-separator bg-white"></div>
                {<FooterContacts/>}
            </div>
            <ul className="list-inline">
                {inlineIconsItems}
            </ul>
        </div>
    )
}

export default FooterInlineIcons