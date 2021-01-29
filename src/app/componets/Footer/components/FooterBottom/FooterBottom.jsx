import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
const FooterBottom = () => {
    return(
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 text-left">
                        <span>Copyright © 2018 Dexignlabs</span>
                    </div>
                    <div className="col-lg-6 col-md-6 text-right ">
                        <span> Design With <FontAwesomeIcon icon={faHeart}  /> By Dexignlabs </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom