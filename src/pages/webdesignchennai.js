import React from 'react';
import businessweb from "./img/webdesign/new/cms.png";

const handleClick = event => {
    event.currentTarget.src = { businessweb };
};

const Contact = () => {
    return (
        <>
            <section id="editslider">
                <div className="container webdesign-section" id="indexnav">
                    <div className="mobilehide">
                        <div className="row ">
                            <div className="col-md-6 welcometext">
                                <h1 style={{ fontSize: 40 }}>
                                    Delivering <span>Awesome</span>
                                    <br /> Client Experiences
                                </h1>
                                <h4>
                                    We plan, design, develop and deliver your{" "}
                                    <span>business website</span> which reflects and elevates your
                                    brand image
                                </h4>
                                <p>
                                    Dream Effects has been named one of the best web design companies
                                    in Chennai, TN. We create stunning websites and web applications
                                    tailored to our client's needs through modern design and
                                    functionality. Our talented team is committed to providing
                                    exceptional service to each of our customers. Build your business
                                    website with Dream Effects to make your dream a reality.
                                </p>
                                <div className="flex-section">
                                    <a className="btn-theme-border" href="#trends">
                                        Learn More
                                    </a>
                                    <a
                                        className="btn-theme"
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        style={{ cursor: "pointer" }}
                                    >
                                        Get Your Website
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img
                                    src={require('./img/webdesign/new/webdesign.png')}
                                    className="img-fluid"
                                    alt="Digital Transformation"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="deskhide">
                        <div className="row ">
                            <div className="col-md-6">
                                <img
                                    src={require('./img/webdesign/new/webdesign.png')}
                                    className="img-fluid"
                                    alt="Digital Transformation"
                                />
                            </div>
                            <div className="col-md-6 welcometext">
                                <h1 style={{ fontSize: 40 }}>
                                    Delivering <span>Awesome</span>
                                    <br /> Client Experiences
                                </h1>
                                <h4>
                                    We plan, design, develop and deliver your{" "}
                                    <span>business website</span> which reflects and elevates your
                                    brand image
                                </h4>
                                <p>
                                    Dream Effects has been named one of the best web design companies
                                    in Chennai, TN. We create stunning websites and web applications
                                    tailored to our client's needs through modern design and
                                    functionality. Our talented team is committed to providing
                                    exceptional service to each of our customers. Build your business
                                    website with Dream Effects to make your dream a reality.
                                </p>
                                <div className="flex-section">
                                    <a className="btn-theme-border" href="#trends">
                                        Learn More
                                    </a>
                                    <a
                                        className="btn-theme"
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        style={{ cursor: "pointer" }}
                                    >
                                        Get Your Website
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tech-section">
                <div className="container">
                    <div className="col-md-12">
                        <h6
                            style={{
                                fontWeight: 700,
                                fontSize: 18,
                                fontFamily: '"Plus Jakarta Sans"',
                                paddingTop: 40
                            }}
                        >
                            Technologies We Handle
                        </h6>
                    </div>
                    <div className="tech-section-wrapper">
                        <div className="single-tech">
                            <img src={require('./img/webdesign/tech/hlogo.png')} title="HTML" alt="brand" />
                        </div>
                        <div className="single-tech">
                            <img src={require('./img/webdesign/tech/css.png')} title="CSS" alt="brand" />
                        </div>
                        <div className="single-tech">
                            <img
                                src={require('./img/webdesign/tech/laravel.png')}
                                title="Laravel"
                                alt="brand"
                            />
                        </div>
                        <div className="single-tech">
                            <img src={require('./img/webdesign/tech/php.png')} title="PHP" alt="brand" />
                        </div>
                        <div className="single-tech">
                            <img
                                src={require('./img/webdesign/tech/react.png')}
                                title="React Js"
                                alt="brand"
                            />
                        </div>
                        <div className="single-tech">
                            <img
                                src={require('./img/webdesign/tech/wordpress.png')}
                                title="Wordpress"
                                alt="brand"
                            />
                        </div>
                        <div className="single-tech">
                            <img src={require('./img/webdesign/tech/kendo.png')} title="Kendo" alt="brand" />
                        </div>
                        <div className="single-tech">
                            <img src={require('./img/webdesign/tech/figma.png')} title="Figma" alt="brand" />
                        </div>
                        <div className="single-tech">
                            <img
                                src={require('./img/webdesign/tech/ps.png')}
                                title="Adobe Photoshop"
                                alt="brand"
                            />
                        </div>
                        <div className="single-tech">
                            <img
                                src={require('./img/webdesign/tech/ai.png')}
                                title="Adobe Illustrator"
                                alt="brand"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="architecture" id="trends">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={require('./img/web-architecture.png')} alt="" className="img-fluid" />
                            <div className="float-box">
                                <img src={require('./img/webdesign/new/best-webdesign.png')} alt="" />
                            </div>
                            <div className="float-box-1">
                                <img src={require('./img/webdesign/new/bootstrap.png')} alt="" />
                                <img src={require('./img/webdesign/new/tailwind.png')} alt="" />
                                <img src={require('./img/webdesign/new/react.png')} className="last" alt="" />
                            </div>
                            <div className="ills">
                                <img src={require('./img/webdesign/new/illus.png')} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 just-center">
                            <div className="headtext text-left">
                                <h3>Our website architecture adapts</h3>
                                <h2>Trends &amp; Accessibility</h2>
                            </div>
                            <div className="archi-section">
                                <div className="archi-box">
                                    <div className="img-section">
                                        <img
                                            src={require('./img/webdesign/new/responsive.png')}
                                            className="img-fit"
                                            alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <h3>Responsive websites</h3>
                                        <p>
                                            More than 60% of internet users are using mobile and tablet
                                            devices to browse your website, our websites are fully
                                            responsive to adapt any screen size from any device.
                                        </p>
                                    </div>
                                </div>
                                <div className="archi-box">
                                    <div className="img-section">
                                        <img
                                            src={require('./img/webdesign/new/seo.png')}
                                            className="img-fit"
                                            alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <h3>Search engine friendly</h3>
                                        <p>
                                            Our websites are made with default search engine friendly
                                            standards, so if you want to start search engine optimization,
                                            it can be done with minimal efforts
                                        </p>
                                    </div>
                                </div>
                                <div className="archi-box">
                                    <div className="img-section">
                                        <img
                                            src={require('./img/webdesign/new/updated.png')}
                                            className="img-fit"
                                            alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <h3>Always Updated</h3>
                                        <p>
                                            Our designers and developers are constantly in update with
                                            changing technology landscapes to adapt and provide the latest
                                            technologies and trends in the market. So you will always get
                                            the latest.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <a
                                className="btn-theme"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                style={{ cursor: "pointer" }}
                            >
                                Get Your Website
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="included">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="headtext text-center mb-50">
                                <h2>What’s Included</h2>
                            </div>
                        </div>
                        <br />
                        <div className="col-md-4">
                            <div className="include-box left">
                                <img
                                    src={require('./img/webdesign/new/home-1.png')}
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="content">
                                    <h3>Homepage</h3>
                                    <p>
                                        Uniquely designed Home page with sliders and sections based on
                                        business
                                    </p>
                                </div>
                            </div>
                            <div className="include-box left-xl">
                                <img
                                    src={require('./img/webdesign/new/pages-1.png')}
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="content">
                                    <h3>Pages</h3>
                                    <p>
                                        Individual pages to describe your business, product and services
                                    </p>
                                </div>
                            </div>
                            <div className="include-box left">
                                <img
                                    src={require('./img/webdesign/new/leadform.png')}
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="content">
                                    <h3>Lead Form</h3>
                                    <p>Get business enquiries from website direct to your mailbox</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img
                                src={require('./img/webdesign/new/dfx-model.png')}
                                alt=""
                                className="img-fluid model"
                            />
                            <div className="include-box">
                                <img
                                    src={require('./img/webdesign/new/mail.png')}
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="content">
                                    <h3>Email Service</h3>
                                    <p>Free and paid mail services based on the requirements</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="include-box right">
                                <img
                                    src={require('./img/webdesign/new/location-1.png')}
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="content">
                                    <h3>Location</h3>
                                    <p>
                                        Contact page with google map to make customers locate you easily
                                    </p>
                                </div>
                            </div>
                            <div className="include-box right-xl">
                                <img
                                    src={require('./img/webdesign/new/support-1.png')}
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="content">
                                    <h3>Technical Support</h3>
                                    <p>Annual Maintenance and Technical Support Services.</p>
                                </div>
                            </div>
                            <div className="include-box right">
                                <img
                                    src={require('./img/webdesign/new/analytics.png')}
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="content">
                                    <h3>Google Analytics</h3>
                                    <p>
                                        Analytics integration to know the website traffic &amp; visitor
                                        statistics
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <img src={require('./img/webdesign/new/waves 2.png')} alt="" className="svg-wave" />
            <section className="web-solutions">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="headtext text-left mb-50">
                                <h2>Web Development Solutions We Provide</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img
                                src={require('./img/webdesign/new/businesswebsite1.png')}
                                alt=""
                                className="img-fluid "
                                id="tabImage"
                            />
                        </div>
                        <div className="col-md-6">
                            <nav className="solutionsnav">
                                <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                    <a
                                        className="nav-item nav-link active"
                                        id="nav-home-tab"
                                        onClick={handleClick}
                                        
                                        data-toggle="tab"
                                        href="#nav-home"
                                        role="tab"
                                        aria-controls="nav-home"
                                        aria-selected="true"
                                    >
                                        Business Website
                                    </a>
                                    <a
                                        className="nav-item nav-link"
                                        id="nav-profile-tab"
                                        data-toggle="tab"
                                        href="#nav-profile"
                                        role="tab"
                                        aria-controls="nav-profile"
                                        aria-selected="false"
                                    >
                                        CMS / Blog
                                    </a>
                                    <a
                                        className="nav-item nav-link"
                                        id="nav-contact-tab"
                                        onClick={handleClick}
                                        
                                        data-toggle="tab"
                                        href="#nav-contact"
                                        role="tab"
                                        aria-controls="nav-contact"
                                        aria-selected="false"
                                    >
                                        E-Commerce
                                    </a>
                                    <a
                                        className="nav-item nav-link"
                                        id="nav-about-tab"
                                        
                                        data-toggle="tab"
                                        href="#nav-about"
                                        role="tab"
                                        aria-controls="nav-about"
                                        aria-selected="false"
                                    >
                                        Custom Web App
                                    </a>
                                </div>
                            </nav>
                            <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="nav-home"
                                    role="tabpanel"
                                    aria-labelledby="nav-home-tab"
                                >
                                    <p>
                                        The basic yet powerful website for your business that can have
                                        all required information about your company, services and so on.
                                        Designed uniquely with the right quality and standards with
                                        responsive optimization for all types of mobile and display
                                        devices with different sizes. Loads faster than most of the
                                        other websites and are search engine friendly.
                                    </p>
                                    <p>
                                        Suitable for all types of businesses looking to have a digital
                                        presence with whatever information they wanted to showcase.
                                    </p>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-profile"
                                    role="tabpanel"
                                    aria-labelledby="nav-profile-tab"
                                >
                                    <p>
                                        CMS - Content Management System is a type of website development
                                        which is self-manageable by the website owner. These websites
                                        are made with different development frameworks with admin
                                        dashboards to manage the entire website like adding, editing the
                                        existing content, creating new pages for new products or
                                        services, updating the events, offers and more can be done with
                                        CMS type of websites.
                                    </p>
                                    <p>
                                        Suitable for businesses which frequently updates the information
                                        online
                                    </p>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-contact"
                                    role="tabpanel"
                                    aria-labelledby="nav-contact-tab"
                                >
                                    <p>
                                        Start selling online, with our powerful ecommerce solutions.
                                        Whether your business is small and dealing with a few products
                                        or a multi product superstore, we have a solution for everyone.
                                        Right from product management, Sales, stock management, Orders
                                        &amp; Delivery along with payment gateway integration, and a lot
                                        more features and functionalities you can run a successful
                                        online store.
                                    </p>
                                    <p>
                                        Suitable for retail, wholesale and any type of businesses who
                                        want to sell their products and services online.
                                    </p>
                                    <a className="btn-theme" href="ecommerce-website-developement">
                                        Know More
                                    </a>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-about"
                                    role="tabpanel"
                                    aria-labelledby="nav-about-tab"
                                >
                                    <p>
                                        Custom web applications are developed purely based on business
                                        process requirements. When there is no existing solution
                                        available in the market for your business idea and process, then
                                        custom development is the best option where everything is
                                        possible.
                                    </p>
                                    <p>
                                        Our expert developers will get the exact requirements,
                                        brainstorm with both client and internal team to formulate the
                                        process plan, create wireframes, prototypes and even POC-Proof
                                        of Concept if required. Then the entire development process will
                                        take place very similar to any software development life cycle
                                        including testing, trial run till deployment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fullsection">
                <diuv className="container-fluid">
                    <div className="row">
                        <div className="col-md-5">
                            <h2 className="sublink1 text-left" style={{ color: "#fff" }}>
                                Build a website, which builds your business
                            </h2>
                        </div>
                        <div className="col-md-7">
                            <p>
                                Establishing a digital presence, starting a blog, selling products
                                online or bringing your business idea to life, create a suitable
                                website from the industry experts to grow your business.
                            </p>
                            <a
                                className="btn-template"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                href="#"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </diuv>
            </section>
            <section className="hostingsection">
                <div className="container desktophide">
                    <div className="row">
                        <div className="col-md-12 just-center">
                            <div className="headtext text-left mb-30">
                                <h2>Domain &amp; Hosting</h2>
                            </div>
                            <img
                                src={require('./img/webdesign/new/hosting.png')}
                                alt=""
                                className="img-fluid"
                            />
                            <p>
                                If you are new to the websites and for the business, then rest
                                assured that you are in safe hands. For your business and website,
                                we take care of the domain registration, hosting, email services
                                along with renewal and upgrade support. Right from shared hosting,
                                VPS, Cloud and dedicated server, we will help you to get the best
                                choice of hosting based on your website and application needs.
                            </p>
                            <p>
                                Without proper knowledge on the type of hosting, platform and
                                features the hosting companies provide, if you take a service
                                yourself by seeing advertisements, you may be locked out or forced
                                to change the service by paying more due to the mismatch of
                                requirements. So with our expert knowledge and experience, we will
                                get you the right hosting, email services at the right cost based on
                                requirements.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 just-center">
                            <div className="headtext text-left mb-30">
                                <h2>Maintenance &amp; Support</h2>
                            </div>
                            <img
                                src={require('./img/webdesign/new/support.jpg')}
                                alt=""
                                className="img-fluid brdimg mb-30"
                            />
                            <p>
                                If you are new to the websites and for the business, then rest
                                assured that you are in safe hands. For your business and website,
                                we take care of the domain registration, hosting, email services
                                along with renewal and upgrade support. Right from shared hosting,
                                VPS, Cloud and dedicated server, we will help you to get the best
                                choice of hosting based on your website and application needs.
                            </p>
                            <p>
                                Without proper knowledge on the type of hosting, platform and
                                features the hosting companies provide, if you take a service
                                yourself by seeing advertisements, you may be locked out or forced
                                to change the service by paying more due to the mismatch of
                                requirements. So with our expert knowledge and experience, we will
                                get you the right hosting, email services at the right cost based on
                                requirements.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mobilehide">
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src={require('./img/webdesign/new/hosting.png')}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-6 just-center">
                            <div className="headtext text-left mb-30">
                                <h2>Domain &amp; Hosting</h2>
                            </div>
                            <p>
                                If you are new to the websites and for the business, then rest
                                assured that you are in safe hands. For your business and website,
                                we take care of the domain registration, hosting, email services
                                along with renewal and upgrade support. Right from shared hosting,
                                VPS, Cloud and dedicated server, we will help you to get the best
                                choice of hosting based on your website and application needs.
                            </p>
                            <p>
                                Without proper knowledge on the type of hosting, platform and
                                features the hosting companies provide, if you take a service
                                yourself by seeing advertisements, you may be locked out or forced
                                to change the service by paying more due to the mismatch of
                                requirements. So with our expert knowledge and experience, we will
                                get you the right hosting, email services at the right cost based on
                                requirements.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 just-center">
                            <div className="headtext text-left mb-30">
                                <h2>Maintenance &amp; Support</h2>
                            </div>
                            <p>
                                If you are new to the websites and for the business, then rest
                                assured that you are in safe hands. For your business and website,
                                we take care of the domain registration, hosting, email services
                                along with renewal and upgrade support. Right from shared hosting,
                                VPS, Cloud and dedicated server, we will help you to get the best
                                choice of hosting based on your website and application needs.
                            </p>
                            <p>
                                Without proper knowledge on the type of hosting, platform and
                                features the hosting companies provide, if you take a service
                                yourself by seeing advertisements, you may be locked out or forced
                                to change the service by paying more due to the mismatch of
                                requirements. So with our expert knowledge and experience, we will
                                get you the right hosting, email services at the right cost based on
                                requirements.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img
                                src={require('./img/webdesign/new/support.jpg')}
                                alt=""
                                className="img-fluid brdimg"
                            />
                            <div className="spinner1 support dot">
                                <img
                                    className="scale"
                                    src={require('./img/abs-2.png')}
                                    alt="Company Profile Vector"
                                />
                            </div>
                            <div className="award-status bounce-slide">
                                <div className="inner">
                                    <div className="icon">
                                        <img
                                            src={require('./img/webdesign/new/support.png')}
                                            alt=""
                                            style={{ height: 50 }}
                                        />
                                    </div>
                                    <div className="content">
                                        <h6 className="title">Need help?</h6>
                                        <span className="subtitle">We are a call away!</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <img src={require('./img/webdesign/new/waves 2.png')} alt="" className="svg-wave-rotate" />
            <section className="architecture">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="headtext text-center mb-50">
                                <h2>With 13+ years of experience</h2>
                                <p>
                                    We deliver the best customer experience by building the right
                                    website and digital solutions for different industry verticals.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <ul className="exp-list">
                                <li>SMEs</li>
                                <li>Hotels &amp; Resorts</li>
                                <li>Restaurants</li>
                                <li>College &amp; Universities</li>
                                <li>Training Institutions</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul className="exp-list">
                                <li>Hospitals &amp; Healthcare</li>
                                <li>Software Companies</li>
                                <li>Advertising Agencies</li>
                                <li>Retail &amp; Wholesale businesses</li>
                                <li>Startups</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul className="exp-list">
                                <li>Product Companies</li>
                                <li>Consulting firms</li>
                                <li>Food &amp; Beverages</li>
                                <li>Travel &amp; Tourism</li>
                                <li>Architects &amp; Builders</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul className="exp-list">
                                <li>Engineering Companies</li>
                                <li>Warehouse &amp; Logistics</li>
                                <li>Manufacturing companies</li>
                                <li>Jewelleries</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div
                            className="contactform"
                            id="contact"
                            style={{ padding: "30px 50px" }}
                        >
                            <button
                                className="closebtn close"
                                type="button"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                            <h2 className="text-center" style={{ marginBottom: 50 }}>
                                Tell us your requirement
                            </h2>
                            <form name="quote-frm" method="post" action="webdesign-query.php">
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="f-7 mb-10">
                                            What type of website do you need?
                                        </label>
                                    </div>
                                    <div className="col-md-12 typeweb">
                                        <label className="radio-inline">
                                            <input
                                                className="frmradio"
                                                type="radio"
                                                name="optradio"
                                                defaultValue="Business Website"
                                            />
                                            Business Website
                                            <span>(Applicable for all Business)</span>
                                        </label>
                                        <label className="radio-inline">
                                            <input
                                                className="frmradio"
                                                type="radio"
                                                name="optradio"
                                                defaultValue="CMS Website"
                                            />
                                            CMS Website
                                            <span>(Self Manageable Website)</span>
                                        </label>
                                        <label className="radio-inline">
                                            <input
                                                className="frmradio"
                                                type="radio"
                                                name="optradio"
                                                defaultValue="E-Commerce"
                                            />
                                            E-Commerce
                                            <span>(Sell your products online)</span>
                                        </label>
                                        <label className="radio-inline">
                                            <input
                                                className="frmradio"
                                                type="radio"
                                                name="optradio"
                                                defaultValue="Other / No Idea"
                                            />
                                            Other / No Idea
                                            <span>(Need assistance)</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name="bname"
                                            className="form-control"
                                            placeholder="Business Name "
                                            required=""
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name="btype"
                                            className="form-control"
                                            placeholder="Business Type"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            className="form-control"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="tel"
                                            name="contactno"
                                            placeholder="Phone"
                                            className="form-control"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <select
                                            name="budget"
                                            className="field_box1 form-control"
                                            id="servicerequired"
                                            required=""
                                        >
                                            <option value="" selected="selected">
                                                Select Budget
                                            </option>
                                            <option value="Upto 50K INR">Upto 50K INR</option>
                                            <option value="50K - 75K INR">50K - 75K INR</option>
                                            <option value="75K - 1.5 Lakh">75K - 1.5 Lakh</option>
                                            <option value="More than 1.5 Lakh">More than 1.5 Lakh</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row hosting">
                                    <div className="col-md-6">
                                        <div>
                                            <label className="f-7">Domain Hosting</label>
                                        </div>
                                        <div>
                                            <label className="radio-inline">
                                                <input
                                                    className="frmradio"
                                                    type="radio"
                                                    name="domainregister"
                                                    defaultValue="Already Having"
                                                />
                                                Already Having
                                            </label>
                                            <label className="radio-inline">
                                                <input
                                                    className="frmradio"
                                                    type="radio"
                                                    name="domainregister"
                                                    defaultValue="Need to Register"
                                                />
                                                Need to Register
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <textarea
                                            className="form-control"
                                            placeholder="Your Message"
                                            name="queries"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div
                                            className="g-recaptcha"
                                            data-sitekey="6LeYwF8gAAAAAOK1sF1JWouMnNAr0IWX-2KmEn3a"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <button
                                            type="submit"
                                            name="contactsubmit"
                                            className="btn-template1"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Contact;