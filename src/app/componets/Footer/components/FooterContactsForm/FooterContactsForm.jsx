import React from 'react'
import Button from './../../../../../shared/components/Button';
import Input from './../../../../../shared/components/Input';
const FooterContactsForm = () => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6 footer-col-4">
            <div className="widget widget_getintuch">
                <h6 className="m-b15 h6 text-uppercase">Contact us</h6>
                <div className="dlab-separator bg-white"></div>
                <div className="search-bx">
                <div className="dzFormMsg"></div>
                <form method="post" className="dzForm" action="script/contact.php">
                    <Input type="hidden" value="Contact" name="dzToDo" />
                    <div className="input-group">
                        <Input name="dzName" type="text" required className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="input-group">
                        <Input name="dzEmail" type="email" className="form-control" required placeholder="Your Email Address" />
                    </div>
                    <div className="input-group">
                        <textarea name="dzMessage" rows="4" className="form-control" required placeholder="Your Message..."></textarea>
                    </div>
                    <div className="input-group">
                        <Button name="submit" type="submit" value="Submit" className="site-button "> <span>Submit</span> </Button>
                    </div>
                    
                </form>
                </div>
            </div>
        </div>
    )
}

export default FooterContactsForm