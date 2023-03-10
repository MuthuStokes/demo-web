
import React from 'react';

import bannerImg from './img/banner2.webp';
import bannerVid from './img/search-bar.webm';

const Home = () => {
    return (
        <div>
            <section id="editslider">
                <div className="container" id="indexnav">
                    <div>
                        <div className="row ">
                            <div className="col-md-6 welcometext">
                                <h1 style={{ fontSize: 40 }}>
                                    Enabling <span>Digital Transformation</span>
                                </h1>
                                <h2>
                                    to grow your <span>business</span> to the next level
                                </h2>
                                <p>
                                    The right Branding, Professional Website, Internet &amp; Social
                                    Media Presence, and Strategic digital marketing with powerful tools
                                    to transform your business to all new heights.
                                </p>
                                <a className="btn-theme" href="index#servicess">
                                    Explore Services
                                </a>
                                <h6
                                    style={{
                                        fontWeight: 700,
                                        fontSize: 26,
                                        fontFamily: '"Plus Jakarta Sans"',
                                        paddingTop: 40,
                                        borderTop: "2px solid #e7e7e7"
                                    }}
                                >
                                    Trusted by top brands for our digital services.
                                </h6>
                                <div className="customer-logos1 slider">
                                    <div className="slide-in-right slide">
                                        <img
                                            src={require('./img/clients/ramakrishna.png')}
                                            className="img-fluid"
                                            alt="Ramakrishna Mission"
                                        />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img src={require('./img/clients/drdo.png')} className="img-fluid" alt="DRDO" />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img src={require('./img/clients/repco.png') } className="img-fluid" alt="Repco" />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img src={require('./img/clients/sofeton.png')} className="img-fluid" alt="Sofeton" />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img src={require('./img/clients/simens.png')} className="img-fluid" alt="Simens" />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img src={require('./img/clients/pepsico.png')} className="img-fluid" alt="Pepsico" />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img
                                            src={require('./img/clients/arun-excello.png')}
                                            className="img-fluid"
                                            alt="Arun Excello"
                                        />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img src={require('./img/clients/buhari.png')} className="img-fluid" alt="Buhari" />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img
                                            src={require('./img/clients/swisscar.png')}
                                            className="img-fluid"
                                            alt="Swiss Rent a Car"
                                        />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img src={require('./img/clients/fusionvr.png') } className="img-fluid" alt="FusionVR" />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img
                                            src={require('./img/clients/podhigai-ads.png')}
                                            className="img-fluid"
                                            alt="Podhigai Ads"
                                        />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img
                                            src={require('./img/clients/jc-residency.png')}
                                            className="img-fluid"
                                            alt="JC Residency"
                                        />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img
                                            src={require('./img/clients/bapalal.png')}
                                            className="img-fluid"
                                            alt="Bapalal Jewllers"
                                        />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img
                                            src={require('./img/clients/shenbaga.png')}
                                            className="img-fluid"
                                            alt="Shenbaga Hotel"
                                        />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img
                                            src={require('./img/clients/truly-south.png')}
                                            className="img-fluid"
                                            alt="Truly South"
                                        />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img
                                            src={require('./img/clients/curry-story.png')}
                                            className="img-fluid"
                                            alt="Curry Story"
                                        />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img
                                            src={require('./img/clients/hanson-food.png')}
                                            className="img-fluid"
                                            alt="Hanson Food"
                                        />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img
                                            src={require('./img/clients/venus.png')}
                                            className="img-fluid"
                                            alt="Venus K Equipments"
                                        />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img
                                            src={require('./img/clients/divaz.png')}
                                            className="img-fluid"
                                            alt="Divaz Consulting"
                                        />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img src={require('./img/clients/vktpl.png')} className="img-fluid" alt="VKTPL" />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img
                                            src={require('./img/clients/pleasant-days.png')}
                                            className="img-fluid"
                                            alt="Pleasant Days"
                                        />
                                    </div>
                                    <div className="slide-in-right slide">
                                        <img
                                            src={require('./img/clients/chefs-cofee.png')}
                                            className="img-fluid"
                                            alt="Chefs Coffee"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img
                                    src={bannerImg}
                                    className="img-fluid"
                                    alt="Digital Transformation"
                                />
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section id="bodytext">
                <section
                    className="advsection ecomm homespecialize"
                    id="servicess"
                    style={{ background: "#F2F4F8" }}
                >
                    <div className="container">
                        <div className="vec1">
                            <img src={require('./img/vec1.png')} alt="" />
                        </div>
                        <div className="row">
                            <div
                                className="col-md-4"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center"
                                }}
                            >
                                <div className="headtext text-left">
                                    <h3>We offer</h3>
                                    <h2>Services most needed by every business</h2>
                                    <p>
                                        If you are looking for a full-service design agency for all your
                                        digital design, development, and marketing needs, then you've
                                        landed in the right place. At Dream Effects, we have a team of
                                        experts who combine their experience and creativity with
                                        technology to deliver outstanding solutions that drive results.
                                    </p>
                                    <a href="/contact-us?contactform" className="btn-theme">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="servebox">
                                    <img src={require('./img/branding-design.jpg')} alt="" className="img-fluid" />
                                    <div className="content">
                                        <h5>Branding</h5>
                                        <p>
                                            Our passion is to make outstanding design for your business and
                                            brand to stand out from a crowd.{" "}
                                            <a href="/branding">Read More ...</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="servebox">
                                    <img src={require('./img/ecommerce.jpg')} alt="" className="img-fluid" />
                                    <div className="content">
                                        <h5>E-Commerce</h5>
                                        <p>
                                            Start your online store and sell your products online. With more
                                            than a decade of experience{" "}
                                            <a href="/ecommerce-website-developement">Read More ...</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-xl-80">
                                <div className="servebox">
                                    <img
                                        src={require('./img/webdesign-development.jpg')}
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <div className="content">
                                        <h5>Web Development</h5>
                                        <p>
                                            We offer a wide range of Design &amp; Development Solutions
                                            which suits every business requirement.{" "}
                                            <a href="/web-design-chennai">Read More ...</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="servebox">
                                    <img src={require('./img/digitalmarket.jpg')} alt="" className="img-fluid" />
                                    <div className="content">
                                        <h5>Digital Marketing</h5>
                                        <p>
                                            Our Digital Marketing solution includes, SEO - Search Engine
                                            Optimization, SEM - Search Engine Marketing and SMM.{" "}
                                            <a href="/digital-marketing">Read More ...</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vec2">
                            <img src={require('./img/vec1.png')} alt="" />
                        </div>
                        <div className="vec3">
                            <img src={require('./img/vec3.png')} alt="" />
                        </div>
                    </div>
                </section>
            </section>

            <section className="introsection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-content">
                                <div className="images-part">
                                    <img
                                        src={require('./img/company-profile.webp')}
                                        
                                        alt="Company Profile"
                                    />
                                    
                                </div>
                                <div className="rs-animations">
                                    <div className="spinner dot">
                                        <img
                                            className="scale"
                                            src={require('./img/abs-2.png')}
                                            alt="Company Profile Vector"
                                        />
                                    </div>
                                    <div className="spinner ball">
                                        <img
                                            className="dance2"
                                            src={require('./img/abs-1.png')}
                                            alt="Company Profile Vector"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 mar-50 aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration={4000}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}
                        >
                            <div className="headtext text-left">
                                <h3>Who are we</h3>
                                <h2>Introduction</h2>
                            </div>
                            <div className="welcome-one__right text-justify">
                                <p style={{ marginBottom: 20 }}>
                                    Dream Effects is one of the known and reputed Branding &amp; Web
                                    Development companies in Chennai, India. We cater our services to
                                    Branding Designs, Web design &amp; development, Digital Marketing,
                                    Corporate Presentations, &amp; allied digital services. Apart from
                                    providing these services, we also do consulting for companies to
                                    effectively manage their business by utilizing the latest trends and
                                    technologies available in the market. We assist them by implementing
                                    the required systems and frameworks, providing the right tools with
                                    training to manage their entire marketing and sales process which
                                    helps them to transform their business and increase profits.
                                </p>
                                <p>
                                    We believe in continuous learning &amp; continual development are
                                    the key to attaining the contemporary status in this evolving
                                    industry
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="weservesection">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div
                                    className="headtext text-center aos-init aos-animate"
                                    data-aos="zoom-in"
                                    data-aos-duration={3500}
                                >
                                    <h2>Industries We Serve</h2>
                                    <hr />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <ul className="industries-list">
                                    <li
                                        className="aos-init aos-animate"
                                        data-aos="flip-up"
                                        data-aos-duration={3500}
                                >
                                    <img src={require('./img/industries/demo/industry.png')} alt="Industry" />
                                        Industrial
                                    </li>
                                    <li
                                        className="aos-init aos-animate"
                                        data-aos="flip-up"
                                        data-aos-duration={3500}
                                    >
                                    <img
                                        src={require('./img/industries/demo/hospitality.png')}
                                            alt="Hospitality"
                                        />
                                        Hospitality
                                    </li>
                                    <li
                                        className="aos-init aos-animate"
                                        data-aos="flip-up"
                                        data-aos-duration={3500}
                                    >
                                    <img
                                        src={require('./img/industries/demo/food-beverages.png')}
                                            alt="Food Beverages"
                                        />
                                        Food and Beverages
                                    </li>
                                    <li
                                        className="aos-init aos-animate"
                                        data-aos="flip-up"
                                        data-aos-duration={3500}
                                    >
                                    <img
                                        src={require('./img/industries/demo/information-technology.png')}
                                            alt="Information Technology"
                                        />
                                        Information Technology
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="industries-list">
                                    <li
                                        className="aos-init aos-animate"
                                        data-aos="flip-up"
                                        data-aos-duration={3500}
                                >
                                    <img src={require('./img/industries/demo/hospitals.png')} alt="Hospitals" />
                                        Hospitals and Pharmaceutical
                                    </li>
                                    <li
                                        className="aos-init aos-animate"
                                        data-aos="flip-up"
                                        data-aos-duration={3500}
                                >
                                    <img src={require('./img/industries/demo/school.png')} alt="School" />
                                        Schools and Colleges
                                    </li>
                                    <li
                                        className="aos-init aos-animate"
                                        data-aos="flip-up"
                                        data-aos-duration={3500}
                                    >
                                    <img
                                        src={require('./img/industries/demo/training-institutions.png')}
                                            alt="Training Institutions"
                                        />
                                        Training Institutions
                                    </li>
                                    <li
                                        className="aos-init aos-animate"
                                        data-aos="flip-up"
                                        data-aos-duration={3500}
                                    >
                                    <img
                                        src={require('./img/industries/demo/realestate-builders.png')}
                                            alt="Realestate Builders"
                                        />
                                        Real Estate and Builders
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="industries-list">
                                    <li
                                        className="aos-init aos-animate"
                                        data-aos="flip-up"
                                        data-aos-duration={3500}
                                    >
                                    <img
                                        src={require('./img/industries/demo/product-manufacturers.png')}
                                            alt="Product Manufacturers"
                                        />
                                        Product Manufacturers and Retailers
                                    </li>
                                    <li
                                        className="aos-init aos-animate"
                                        data-aos="flip-up"
                                        data-aos-duration={3500}
                                >
                                    <img src={require('./img/industries/demo/fashion.png')} alt="Fashion" />
                                        Fashion and Apparels
                                    </li>
                                    <li
                                        className="aos-init aos-animate"
                                        data-aos="flip-up"
                                        data-aos-duration={3500}
                                    >
                                    <img
                                        src={require('./img/industries/demo/travel-tourism.png')}
                                            alt="Travel Tourism"
                                        />
                                        Travel and Tourism
                                    </li>
                                    <li
                                        className="aos-init aos-animate"
                                        data-aos="flip-up"
                                        data-aos-duration={3500}
                                    >
                                    <img
                                        src={require('./img/industries/demo/ad-agencies.png')}
                                            alt="Ad Agencies"
                                        />
                                        OOH and ad agencies
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                
            <section className="blog" data-aos="zoom-in" data-aos-duration={3500}>
                <div className="container">
                    <div className="headtext text-center">
                        <h2>Our Blog</h2>
                        {/* <p >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>*/}
                        <hr />
                    </div>
                </div>
                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div
                                className="blogsection"
                                data-aos="zoom-in"
                                data-aos-duration={3500}
                            >
                                <img
                                    src={require('./img/branding-and-collateral-requirements.webp')}
                                    alt="Branding and Collateral Requirements"
                                    className="img-fluid"
                                />
                                
                                <div className="bodyblog">
                                    <h3>
                                        Branding and Collateral Requirements that all Start-ups Need
                                    </h3>
                                    <h6>Jan 04, 2017</h6>
                                    <hr />
                                    <p>
                                        Any new business startups requires a brand collateral for their
                                        primary requirements and day to day activities...
                                    </p>
                                    <a
                                        href="https://www.dreameffectsmedia.com/blog/branding-and-collateral-requirements-that-all-start-ups-need.html"
                                        target="_blank"
                                    >
                                        <span>
                                            Read More{" "}
                                            <i className="fa fa-angle-double-right" aria-hidden="true" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div
                                className="blogsection"
                                data-aos="zoom-in"
                                data-aos-duration={3500}
                            >
                                <img
                                    src={require('./img/importance-of-having-mobile-friendly-websites.webp')}
                                    alt="Importance of Having Mobile Friendly Websites"
                                    className="img-fluid"
                                />
                                
                                <div className="bodyblog">
                                    <h3>The Importance of Having Mobile Friendly Websites</h3>
                                    <h6>Jan 24, 2017</h6>
                                    <hr />
                                    <p>
                                        Just as how a few years ago the internet came into being, when
                                        website browsing became the next big thing...
                                    </p>
                                    <a
                                        href="https://www.dreameffectsmedia.com/blog/the-importance-of-having-mobile-friendly-websites.html"
                                        target="_blank"
                                    >
                                        <span>
                                            Read More{" "}
                                            <i className="fa fa-angle-double-right" aria-hidden="true" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div
                                className="blogsection"
                                data-aos="zoom-in"
                                data-aos-duration={3500}
                            >
                                <img
                                    src={require('./img/small-and-midlevel-business-with-ecommerce.webp')}
                                    alt="Small and Mid-level Business with E-Commerce"
                                    className="img-fluid"
                                />
                                
                                <div className="bodyblog">
                                    <h3>Can small and Mid-level Business Do Better with E-Commerce?</h3>
                                    <h6>Jan 24, 2017</h6>
                                    <hr />
                                    <p>
                                        With hundreds of large businesses riding the ecommerce wave during
                                        the 2000s, market domination...
                                    </p>
                                    <a
                                        href="https://www.dreameffectsmedia.com/blog/can-small-and-mid-level-business-do-better-with-e-commerce.html"
                                        target="_blank"
                                    >
                                        <span>
                                            Read More{" "}
                                            <i className="fa fa-angle-double-right" aria-hidden="true" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <a
                                className="btn-theme"
                                href="https://www.dreameffectsmedia.com/blog/"
                                style={{ marginTop: 50 }}
                                target="_blank"
                            >
                                View All
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="headtext text-left" id="testimonials">
                                <h2>What our Customers say about us</h2>
                                <img
                                    src="img/google-reviews-logo.png"
                                    alt=""
                                    className="review-logo"
                                    style={{ margin: "20px 0" }}
                                />
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#carouselExampleControls"
                                role="button"
                                data-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true">
                                    <i className="fa fa-chevron-left" />
                                </span>{" "}
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselExampleControls"
                                role="button"
                                data-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true">
                                    <i className="fa fa-chevron-right" />
                                </span>{" "}
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        <div className="col-md-9" data-aos="fade-right" data-aos-duration={4000}>
                            <div className="card">
                                <div
                                    id="carouselExampleControls"
                                    className="carousel slide"
                                    data-ride="carousel"
                                    data-interval={100000}
                                >
                                    <div className="w-100 carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <div className="bg" />
                                            <div className="row">
                                                <div className="col-md-6 testimonialdiv">
                                                    <div className="carousel-caption">
                                                        <div className="row">
                                                            <label>
                                                                Shenbaga hotel &amp; Convention Center Web Designing
                                                                was done by Dream effects Multimedia &amp; IT
                                                                Solutions. They have done very good designing. They
                                                                are very promote in service.We would like to thank him
                                                                &amp; wish him all the best in future.
                                                            </label>
                                                            <div className="star-rating">★★★★★</div>
                                                            <h4>G. Shankar Rao</h4>
                                                            <h6>Shenbaga Hotel, Pondicherry</h6>
                                                            <div className="testimonialprofile">
                                                                <img
                                                                    src={require('./img/testimonial.png')}
                                                                    className="img-fluid"
                                                                    alt="Testimonial"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 testimonialdiv">
                                                    <div className="carousel-caption">
                                                        <div className="row">
                                                            <label>
                                                                A efficient team to work with, our company received
                                                                all projects given to Dream effects on time. Their
                                                                communication with our team was excellent and they are
                                                                very reasonable. Keep up the great work.
                                                            </label>
                                                            <div className="star-rating">★★★★★</div>
                                                            <h4>Rishwanth Jayaraj</h4>
                                                            <h6>JC Residency, Madurai</h6>
                                                            <div className="testimonialprofile">
                                                                <img
                                                                    src={require('./img/testimonial.png')}
                                                                    className="img-fluid"
                                                                    alt="Testimonial"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="bg" />
                                            <div className="row">
                                                <div className="col-md-6 col-12 testimonialdiv">
                                                    <div className="carousel-caption">
                                                        <div className="row">
                                                            <label>
                                                                They are awesome in their profession, I am using their
                                                                service Since 2013 until today I don't have any
                                                                problems, even if I need any updates just inform them
                                                                one time they will update in my website
                                                                immediately.Those who looking for built new website
                                                                Dream Effect Multimedia And IT is the best .
                                                            </label>
                                                            <div className="star-rating">★★★★★</div>
                                                            <h4>Mr. Kishore Kumar</h4>
                                                            <h6>Prajna Yoga, HongKong</h6>
                                                            <div className="testimonialprofile">
                                                                <img
                                                                    src={require('./img/testimonial.png')}
                                                                    className="img-fluid"
                                                                    alt="Testimonial"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12 testimonialdiv">
                                                    <div className="carousel-caption">
                                                        <div className="row">
                                                            <label>
                                                                Dream effects truly provide the solutions in a DREAM
                                                                way. Their work is proactive and practises state of
                                                                the art tools keeping the most current trends. The
                                                                service is exemplary. All our clients such as Shenbaga
                                                                Hotel and convention centre etc are happy with their
                                                                responsive web designing. Keep up the great job...
                                                                Best Wishes for many successes.
                                                            </label>
                                                            <div className="star-rating">★★★★★</div>
                                                            <h4>Mr. Venu Rao</h4>
                                                            <h6>Peacock Hospitality, Bangalore</h6>
                                                            <div className="testimonialprofile">
                                                                <img
                                                                    src={require('./img/testimonial.png')}
                                                                    className="img-fluid"
                                                                    alt="Testimonial"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="bg" />
                                            <div className="row">
                                                <div className="col-md-6 col-12 testimonialdiv">
                                                    <div className="carousel-caption">
                                                        <div className="row">
                                                            <label>
                                                                We are getting Web Designing Services from Dream
                                                                Effects Multimedia &amp; IT Solutions from 2009. They
                                                                are Excellent in Web designing. They are doing the web
                                                                designing highly Professional to the clients.
                                                            </label>
                                                            <div className="star-rating">★★★★★</div>
                                                            <h4>Mrs. Megala</h4>
                                                            <h6>EMI IT, Chennai</h6>
                                                            {/* <h6>JC Residency</h6> */}
                                                            <div className="testimonialprofile">
                                                                <img
                                                                    src={require('./img/testimonial.png')}
                                                                    className="img-fluid"
                                                                    alt="Testimonial"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12 testimonialdiv">
                                                    <div className="carousel-caption">
                                                        <div className="row">
                                                            <label>
                                                                Mr.Karthik and his Team is a wonderful Young Energetic
                                                                and dynamic team. Understanding the customer need and
                                                                with creative work they have done a excelent job for D
                                                                &amp; A Corporate residency web page. We wish and
                                                                strongly we will recommend for the professional touch.
                                                            </label>
                                                            <div className="star-rating">★★★★★</div>
                                                            <h4>Mr. Amarnath</h4>
                                                            <h6>D &amp; A Corporate Residency, Chennai</h6>
                                                            <div className="testimonialprofile">
                                                                <img
                                                                    src={require('./img/testimonial.png')}
                                                                    className="img-fluid"
                                                                    alt="Testimonial"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="bg" />
                                            <div className="row">
                                                <div className="col-md-6 col-12 testimonialdiv">
                                                    <div className="carousel-caption">
                                                        <div className="row">
                                                            <label>
                                                                One of the best web designing company we have worked
                                                                with so far. Technically sound team and a swift
                                                                service. We are happy to rate them with 5 stars.
                                                            </label>
                                                            <div className="star-rating">★★★★★</div>
                                                            <h4>Mr. Prabakar</h4>
                                                            <h6>Animants, Chennai</h6>
                                                            <div className="testimonialprofile">
                                                                <img
                                                                    src={require('./img/testimonial.png')}
                                                                    className="img-fluid"
                                                                    alt="Testimonial"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12 testimonialdiv">
                                                    <div className="carousel-caption">
                                                        <div className="row">
                                                            <label>
                                                                Outstanding response and support by entire team of
                                                                Dream Effects Multimedia team. Kudos and keep
                                                                rocking...
                                                            </label>
                                                            <div className="star-rating">★★★★★</div>
                                                            <h4>Mr. Sathish Kumar</h4>
                                                            <h6>Chennai</h6>
                                                            <div className="testimonialprofile">
                                                                <img
                                                                    src={require('./img/testimonial.png')}
                                                                    className="img-fluid"
                                                                    alt="Testimonial"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </div>
  );
};
  
export default Home;