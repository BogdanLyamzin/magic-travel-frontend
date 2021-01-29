import React from 'react';
import './Footer.scss';
import FooterInlineIcons from './../FooterInlineIcons'
import FooterTagCloud from './../FooterTagCloud'
import FooterContactsForm from '../FooterContactsForm';
import FooterGallery from '../FooterGallery';
import FooterBottom from '../FooterBottom';
const bg3 = require('./../../../../../shared/styles/images/background/bg6.jpg');

const Footer = () => {
        return (
            <footer className="site-footer style1">
                <div className="footer-top" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="row">
                            {<FooterInlineIcons/>}
                            {<FooterTagCloud/>}
                            {<FooterContactsForm/>}   
                            {<FooterGallery/>}
                        </div>
                    </div>
                </div>
                {<FooterBottom/>}
            </footer>
        )
}
export default Footer;