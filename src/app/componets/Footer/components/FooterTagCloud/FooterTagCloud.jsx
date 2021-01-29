import React from 'react'
import tagcloud from './tagCloud'
import FooterTagCloudItem from './../FooterTagCloudItem'
const FooterTagCloud = () => {
    const TagCloudItems = tagcloud.map(({id,title})=><FooterTagCloudItem key={id} title={title}/>)
    return(
        <div className="col-lg-3 col-md-6 col-sm-7 footer-col-4">
            <div className="widget  widget_tag_cloud">
                <h6 className="m-b15 h6 text-uppercase">Tag</h6>
                <div className="dlab-separator bg-white"></div>
                <div className="tagcloud">
                    {TagCloudItems}
                </div>
            </div>
        </div>
    )
}

export default FooterTagCloud