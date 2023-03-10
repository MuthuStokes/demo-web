import logo from './dream-effects-logo.svg';
import brandicon from './img/icons/branding-designs.png';
import wdicon from './img/icons/webdesign.png';
import ewicon from './img/icons/ecommerce-websites.png';
import dmicon from './img/icons/digital-marketing.png';
import seoicon from './img/icons/seo.png';
import pdicon from './img/icons/packaging-designs.png';
import webicon from './img/icons/webdesign.png';
import adicon from './img/icons/advertisements.png';
import React from "react";


const Navbar = () => {
    return (
        <>
            <nav class='navbar navbar-expand-md  navbar-light fixed-top' id='banner'>
                <a class='navbar-brand' href='index'><img src={logo} alt='dreameffect logo' class='img-fluid'></img></a>




                
                <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavbar'>
                    <i class='fa fa-bars fa-1x' aria-hidden='true'></i>
                </button>
                <div class='collapse navbar-collapse' id='collapsibleNavbar'>
                    <ul class='navbar-nav ml-auto py-4 py-md-0'>
                        <li class='nav-item'>
                            <a class='nav-link' href='index'>Home</a>
                        </li>
                        <li class='nav-item dropdown'>
                            <a class='nav-link dropdown-toggle' href='#' id='navbardrop' data-toggle='dropdown'>
                                Services
                            </a>
                            <div class='dropdown-menu'>
                                <a class='dropdown-item' href='branding'>
                                    <div class='navcard'>
                                        <img src={brandicon} alt='Branding Designs' class='img-fluid'></img>
                                            <h6>Branding Designs</h6>
                                            <span class='desc'>Logo, Brochure, Advertisements and more</span>
                                    </div>
                                </a>
                                <a class='dropdown-item' href='web-design-chennai'>
                                    <div class='navcard'>
                                        <img src={wdicon} alt='Webdesigning Development' class='img-fluid'></img>
                                            <h6>Web Designing & Development</h6>
                                            <span class='desc'>Static, CMS and Custom Development</span>
                                    </div>
                                </a>

                                <a class='dropdown-item' href='ecommerce-website-developement'>
                                    <div class='navcard'>
                                        <img src={ewicon} alt='Ecommerce Websites' class='img-fluid'></img>
                                            <h6>E-Commerce</h6>
                                            <span class='desc'>Online stores and Marketplace</span>
                                    </div>
                                </a>

                                <a class='dropdown-item' href='digital-marketing'>
                                    <div class='navcard'>
                                        <img src={dmicon} alt='Digital Marketing' class='img-fluid'></img>
                                            <h6>Digital Marketing</h6>
                                            <span class='desc'>SEM, SMM and PPC</span>
                                    </div>
                                </a>
                                <a class='dropdown-item' href='seo-search-engine-optimization'>
                                    <div class='navcard'>
                                        <img src={seoicon} alt='Search Engine Optimization' class='img-fluid'></img>
                                            <h6>Search Engine Optimization</h6>
                                            <span class='desc'>Professional Organic SEO</span>
                                    </div>
                                </a>

                            </div>
                        </li>

                        <li class='nav-item dropdown'>
                            <a class='nav-link dropdown-toggle' href='#' id='navbardrop' data-toggle='dropdown'>
                                About Us
                            </a>
                            <div class='dropdown-menu'>
                                <a class='dropdown-item' href='about'>Company Profile</a>
                                <a class='dropdown-item' href='founder-dream-effects'>Founder Profile</a>

                            </div>
                        </li>



                        <li class='nav-item dropdown'>
                            <a class='nav-link dropdown-toggle' href='#' id='navbardrop' data-toggle='dropdown'>
                                Our Works
                            </a>
                            <div class='dropdown-menu'>
                                <a class='dropdown-item' href='portfolio-brochures-product-packages'>
                                    <div class='navcard'>
                                        <img src={pdicon} alt='Brochures Package Designs' class='img-fluid'></img>
                                            <h6>Brochures & Package Designs</h6>
                                            <span class='desc'>Brochures, Labels and Menu Cards Designs</span>
                                    </div>
                                </a>

                                <a class='dropdown-item' href='web-design-portfolio'>
                                    <div class='navcard'>
                                        <img src={webicon} alt='Webdesigning Development' class='img-fluid'></img>
                                            <h6>Web Designing & Development</h6>
                                            <span class='desc'>Web Design Portfolio</span>
                                    </div>
                                </a>
                                <a class='dropdown-item' href='brand-identity-advertisements'>

                                    <div class='navcard'>
                                        <img src={adicon} alt='Brand Advertisements' class='img-fluid'></img>
                                            <h6>Brand Identity & Advertisementss</h6>
                                            <span class='desc'>Brand Advertisements</span>
                                    </div>
                                </a>
                            </div>
                        </li>


                        <li class='nav-item'>
                            <a class='nav-link' href='https://www.dreameffectsmedia.com/blog' target='_blank'>Blog</a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='/careers' to="/about">Careers</a>
                        </li>



                        <li class='nav-item'>
                            <a class='nav-link contact' href='contact-us'>Contact Us</a>
                        </li>
                        <li class='nav-item moblink'>
                            <a class='nav-link contacticon whatsapp' href='#' onClick='sendWhatsappMessage()'><i class='fa fa-whatsapp'></i></a>
                            <a class='nav-link contacticon' href='tel:+919444146028'><i class='fa fa-phone'></i></a>
                        </li>


                    </ul>
                </div>
            </nav>




            
        </>
    );
};

export default Navbar;