import React from 'react'
import gallery from './gallery';
import FooterGalleryItem from './../FooterGalleryItem';
const FooterGallery = () =>{
    const galleryItems = gallery.map(({id,img})=>
    <FooterGalleryItem key={id} img={img}/>
    )
    return(
    <div className="col-lg-3 col-md-6 col-sm-6 footer-col-4">
        <div className="widget widget_gallery">
            <h6 className="m-b15 h6 text-uppercase">GALLERY</h6>
            <div className="dlab-separator bg-white"></div>
            <ul className="mfp-gallery">
                {galleryItems}
            </ul>
        </div>
    </div>
    )
}

export default FooterGallery