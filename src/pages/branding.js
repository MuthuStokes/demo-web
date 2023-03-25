import React from 'react';
import background from "./img/branding-bg.png";
const Contact = () => {
    return (
        <>
            <div className="rs-breadcrumbs rs-breadcrumbs1 img2 branding" style={{ backgroundImage: `url(${background}),linear-gradient(to right, #952525,#e46a21)` }} >
                <div className="breadcrumbs-inner">
                    <div className="container">
                        <div className="row">
                            <h1 className="page-title">Branding Designs</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="welcome-one welcome" id="about">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-6"
                            data-aos="fade-right"
                            data-aos-duration={4000}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}
                        >
                            <div className="headtext text-left">
                                <h3>Build a strong perception with</h3>
                                <h2>Branding Designs</h2>
                            </div>
                            <div className="welcome-one__right">
                                <p className="text-justify">
                                    Our passion is to make outstanding design for your business and
                                    brand to stand out from a crowd. Yes, unique design and innovative
                                    strategies tells story of each product and services visually which
                                    will make your target audience to turn your side. Design is really
                                    a matter from a business perspective which is well known by us. We
                                    at Dream Effects Multimedia bring your dreams and imaginations to
                                    life. We provide contemporary designs and digital printing
                                    solutions based on your business needs. Our best in class designs
                                    and professional designing methodologies helps our Clients to
                                    raise profits and reach more customers for their Business.
                                </p>
                                <a className="btn-theme" href="contact-us?contactform">
                                    Create your Brand
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6" data-aos="fade-left" data-aos-duration={4000}>
                            <img
                                src={require('./img/branding-designs-illustration.webp')}
                                alt="Branding Designs Illustration"
                                style={{ width: "100%" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="facts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="headtext text-center">
                                <h2>Solutions We Provide</h2>
                                <hr />
                            </div>
                        </div>
                        <div
                            className="col-md-4"
                            data-aos="fade-right"
                            data-aos-duration={4000}
                        >
                            <div className="brandbox">
                                <div className="imgsection">
                                    <img src={require('./img/brands/logo-designs.webp')} alt="Logo Design" />
                                </div>
                                <div className="content">
                                    <h5 className="title">Logo Designs &amp; Collaterals</h5>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-4"
                            data-aos="fade-right"
                            data-aos-duration={4000}
                        >
                            <div className="brandbox">
                                <div className="imgsection">
                                    <img
                                        src={require('./img/brands/hilltop-hotel-brochure.webp')}
                                        alt="Brochure Design"
                                    />
                                </div>
                                <div className="content">
                                    <h5 className="title">Brochures &amp; Flyers</h5>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-4"
                            data-aos="fade-right"
                            data-aos-duration={4000}
                        >
                            <div className="brandbox">
                                <div className="imgsection">
                                    <img
                                        src={require('./img/brands/ganpat-grand-menu.webp')}
                                        alt="Menucards Design"
                                    />
                                </div>
                                <div className="content">
                                    <h5 className="title">Menu Cards &amp; Catalogues</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-left" data-aos-duration={4000}>
                            <div className="brandbox">
                                <div className="imgsection">
                                    <img
                                        src={require('./img/brands/indoor-designs.webp')}
                                        alt="Indoor & Outdoor Designs"
                                    />
                                </div>
                                <div className="content">
                                    <h5 className="title">Indoor &amp; Outdoor Designs</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-left" data-aos-duration={4000}>
                            <div className="brandbox">
                                <div className="imgsection">
                                    <img src={require('./img/brands/chakra-papad.webp')} alt="Package Designs" />
                                </div>
                                <div className="content">
                                    <h5 className="title">Products Packaging &amp; Labels</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-left" data-aos-duration={4000}>
                            <div className="brandbox">
                                <div className="imgsection">
                                    <img
                                        src={require('./img/brands/ox-10-profile.webp')}
                                        alt="Magazine & Book Designs"
                                    />
                                </div>
                                <div className="content">
                                    <h5 className="title">Magazine &amp; Book Designs</h5>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-12 text-center"
                            data-aos="zoom-in"
                            data-aos-duration={4000}
                        >
                            <a
                                className="btn-template1 "
                                href="portfolio-brochures-product-packages"
                            >
                                View Portfolio
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ padding: "50px 0" }}>
                <div className="container">
                    <div className="row" data-aos="zoom-in" data-aos-duration={3500}>
                        <div className="col-md-12 ctr">
                            <h2 className="sublink1 text-center">
                                Start your Brand Designs Today{" "}
                            </h2>
                            <a className="btn-template1 " href="contact-us?contactform">
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Contact;