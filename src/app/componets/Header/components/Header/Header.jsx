import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import HeaderSlider from './../HeaderSlider';
import HeaderMenu from './../HeaderMenu';
import Topbar from './../Topbar';
import {content} from './headerContent';

const Header = () => {
    const [visible, setVisible] = useState(false);
    
    
    return(
        <header className="site-header mo-left header">
                <div className="top-bar bg-dark">
                    <div className="container">
                        <Topbar/>
                    </div>
                </div>
                <div className="sticky-header navbar-expand-lg">
                    <div className="main-bar onepage">
                        <div className="container ">
                            <div className="logo-header mostion">
                                <Link to={'./'} ><img src={require('./../../../../../shared/styles/images/logo.png')} alt="" /></Link>
                            </div>
                            <button onClick={()=>setVisible(!visible)} className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div className={`${visible ? 'show' : ''} header-nav navbar-collapse collapse navbar myNavbar justify-content-end`} id="navbarNavDropdown">
                                <HeaderMenu/>
                            </div>
                        </div>
                    </div>
                </div>
                <HeaderSlider content={content}/>
            </header>
    )
}

export default Header;