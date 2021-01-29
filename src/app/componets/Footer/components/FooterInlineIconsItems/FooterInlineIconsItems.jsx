import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const FooterInlineIconsItems = ({className,icon}) => {
    return (
        <li>
            <Link to={''} className={`site-button ${className} sharp`}>
                <FontAwesomeIcon icon={icon} />
            </Link>
        </li>
    )

}

export default FooterInlineIconsItems