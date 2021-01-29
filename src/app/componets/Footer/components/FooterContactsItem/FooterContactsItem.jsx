import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const FooterContactsItem = ({title,icon}) => {
    return (
        <li>
            <span>
                <FontAwesomeIcon icon={icon} />  {title}
            </span>
        </li>
    )
}

export default FooterContactsItem