import React from 'react'
import { Link } from 'react-router-dom';
const FooterGalleryItem = ({img}) => {
    return (
        <li className="img-effect2">
            <Link to={''} className="mfp-link" title="Title Come Here">
                <img src={img} alt="" />
            </Link>
        </li>
    )
}

export default FooterGalleryItem