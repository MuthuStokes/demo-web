import React from 'react';
import background from "./img/digitalmarketing-bg.png";
const Contact = () => {
    return (
        <>
            <div className="rs-breadcrumbs rs-breadcrumbs1 img2 digital" style={{ backgroundImage: `url(${background}),linear-gradient(to right,  #500000,#eb1f25)` }} >
                <div className="breadcrumbs-inner text-center">
                    <div className="container">
                        <div className="row">
                            <h1 className="page-title">Digital Marketing</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="welcome-one welcome" id="about">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-6"
                            data-aos="fade-left"
                            data-aos-duration={3200}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}
                        >
                            <div className="welcome-one__right">
                                <div className="headtext text-left">
                                    <h3>Promote your business with</h3>
                                    <h2>New Age Digital Marketing Services</h2>
                                </div>
                                <p>
                                    Digital Marketing is basically promoting your business and
                                    business website in various online platforms. This includes,{" "}
                                    <b>SEO - Search Engine Optimization</b>,{" "}
                                    <b>SEM - Search Engine Marketing</b> and{" "}
                                    <b>SMM - Social Media Marketing</b>. It is most important that
                                    which business requires which type of marketing to be done among
                                    these platforms for better results.
                                </p>
                                <a
                                    className="btn-theme"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    href="#"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-xl-6"
                            data-aos="fade-right"
                            data-aos-duration={3200}
                        >
                            {/*<img src="img/digital-marketing/digital-marketing-illustration.png" alt="Digital Marketing" style="width: 100%;">*/}
                            <img
                                src={require('./img/model1.png')}
                                className="aos-init aos-animate mobhide"
                                data-aos="fade-left"
                                data-aos-duration={3200}
                                alt=""
                                style={{ width: "100%" }}
                            />
                            <img
                                src={require('./img/model-mobile.png')}
                                className="aos-init aos-animate deskhide mt-50"
                                data-aos="fade-left"
                                data-aos-duration={3200}
                                alt=""
                                style={{ width: "100%" }}
                            />
                            {/*<div class="about__thumb-text">
		<h3 data-text="Marketing">Marketing</h3>
	</div>*/}
                            {/*<img src="img/digital.png" class="aos-init aos-animate" data-aos="fade-left" data-aos-duration="3200" alt="" style="width: 100%;">*/}
                            <div
                                className="tp-chose-item mb-40 aos-init aos-animate"
                                data-aos="fade-left"
                                data-aos-duration={3200}
                                style={{ top: "-57px", right: 17, position: "absolute" }}
                            >
                                <div className="tpchosebox">
                                    <div className="tpchosebox__content">
                                        <div className="title">
                                            <img
                                                src={require('./img/digital-marketing/facebook.png')}
                                                className="hlght"
                                                alt=""
                                                style={{ height: 60 }}
                                            />
                                        </div>
                                        <img src={require('./img/fb-dm.jpg')} alt="" style={{ height: 280 }} />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tp-chose-item google-dm mb-40 aos-init aos-animate"
                                data-aos="fade-left"
                                data-aos-duration={3200}
                                style={{ top: 408, right: "-108px", position: "absolute" }}
                            >
                                <div className="tpchosebox">
                                    <div className="tpchosebox__content">
                                        <div className="title">
                                            <img
                                                src={require('./img/digital-marketing/google.png')}
                                                className="hlght"
                                                alt=""
                                                style={{ height: 60 }}
                                            />
                                        </div>
                                        <img src={require('./img/google-dm.jpg')} alt="" style={{ height: 120 }} />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tp-chose-item mb-40 aos-init aos-animate"
                                data-aos="fade-left"
                                data-aos-duration={3200}
                                style={{ top: 250, right: 453, position: "absolute" }}
                            >
                                <div className="tpchosebox">
                                    <div className="tpchosebox__content">
                                        <div className="title">
                                            <img
                                                src={require('./img/digital-marketing/instagram.png')}
                                                className="hlght"
                                                alt=""
                                                style={{ height: 60 }}
                                            />
                                        </div>
                                        <img src={require('./img/insta-dm.jpg')} alt="" style={{ height: 280 }} />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tp-chose-item mail-dm mb-40"
                                style={{ top: "-40px", left: 5, position: "absolute" }}
                            >
                                <div className="tpchosebox" style={{ padding: 20 }}>
                                    <div className="tpchosebox__content">
                                        <div className="title">
                                            <h4>Leads</h4>
                                            <img
                                                src={require('./img/digital-marketing/mail.png')}
                                                className="hlght"
                                                alt=""
                                                style={{ height: 60 }}
                                            />
                                        </div>
                                        <img src={require('./img/lead-dm.jpg')} alt="" style={{ height: 45 }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="advsection dmsect">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-12 headtext text-center"
                            style={{ marginBottom: 100 }}
                        >
                            <h2>Digital Marketing Channels we manage</h2>
                            <hr />
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration={3200}>
                            <div className="adv">
                                <div className="imgsection">
                                    <i className="fa fa-google" />
                                </div>
                                <h3>Google Search Marketing</h3>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration={3200}>
                            <div className="adv">
                                <div className="imgsection">
                                    <i className="fa fa-facebook" />
                                </div>
                                <h3>Facebook</h3>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration={3200}>
                            <div className="adv">
                                <div className="imgsection">
                                    <i className="fa fa-instagram" />
                                </div>
                                <h3>Instagram</h3>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration={3200}>
                            <div className="adv">
                                <div className="imgsection">
                                    <i className="fa fa-linkedin" />
                                </div>
                                <h3>LinkedIn</h3>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration={3200}>
                            <div className="adv">
                                <div className="imgsection">
                                    <i className="fa fa-youtube-play" />
                                </div>
                                <h3>Youtube</h3>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration={3200}>
                            <div className="adv">
                                <div className="imgsection">
                                    <i className="fa fa-envelope" />
                                </div>
                                <h3>Email Marketing</h3>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="sublink text-center">
                                Kick start your Digital Marketing Campaign Today{" "}
                                <a href="#" data-toggle="modal" data-target="#exampleModal">
                                    Get Started
                                </a>
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="facts">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-12 headtext text-center"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}
                        >
                            <h2>
                                Search Engine Optimization - <span>SEO</span>
                            </h2>
                            <hr />
                        </div>
                        <div className="col-md-12" data-aos="zoom-in" data-aos-duration={3200}>
                            <div className="factbox">
                                <p>
                                    SEO is a secret weapon for every business which is looking to get
                                    more audience &amp; customers online organically. Actual scope of
                                    SEO is to improve the website rankings and visibility in search
                                    engine results. But it doesn’t stop there. Getting high rankings
                                    brings more traffic, which in turn converts the traffic to leads
                                    and leads to customers. The most highlighted part of organic SEO
                                    is the rankings &amp; positions will never fade out immediately
                                    like paid ads.
                                    <a href="seo-search-engine-optimization">Read More..</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="choose-section desktophide">
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-7 col-md-12"
                            data-aos="fade-right"
                            data-aos-duration={3200}
                        >
                            <div className="choose-content-area">
                                <div className="headtext">
                                    <h2>
                                        Search Engine Marketing - <span>SEM</span>
                                    </h2>
                                </div>
                                <p>
                                    SEM - Search Engine Marketing is the process of bringing your
                                    website to the top of the search engine results page through paid
                                    campaigns. Search results are custom created, paid and promoted
                                    with relevant keywords. Paid campaigns are instant Kickstarter for
                                    any business you want to promote online and get immediate leads
                                    and conversions. We offer different plans to promote your website
                                    through SEM based on your business model, monthly budget and
                                    target audience.
                                </p>
                                <p>
                                    {" "}
                                    The speciality of taking SEM services with us is we take care of
                                    each keyword that the user searches and clicks on your ad and each
                                    buck you spent for it. So we guarantee that your money was
                                    utilized in the most efficient way to promote your site.
                                </p>
                                <p>
                                    <b>Few of our SEO activities includes</b>
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="choose-text">
                                            <i className="fa fa-check-circle" />
                                            <p>Multiple AD creations</p>
                                        </div>
                                        <div className="choose-text">
                                            <i className="fa fa-check-circle" />
                                            <p>Adding keywords</p>
                                        </div>
                                        <div className="choose-text">
                                            <i className="fa fa-check-circle" />
                                            <p>Fixing daily budget</p>
                                        </div>
                                        <div className="choose-text">
                                            <i className="fa fa-check-circle" />
                                            <p>Automatic &amp; Manual Bidding</p>
                                        </div>
                                        <div className="choose-text">
                                            <i className="fa fa-check-circle" />
                                            <p>Keep track of budget of keywords</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="choose-text">
                                            <i className="fa fa-check-circle" />
                                            <p>Keep track of AD positions</p>
                                        </div>
                                        <div className="choose-text">
                                            <i className="fa fa-check-circle" />
                                            <p>Cross website advertising</p>
                                        </div>
                                        <div className="choose-text">
                                            <i className="fa fa-check-circle" />
                                            <p>Frequent keyword additions</p>
                                        </div>
                                        <div className="choose-text">
                                            <i className="fa fa-check-circle" />
                                            <p>Regular campaign optimization</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-5 col-md-12 mt-70"
                            data-aos="fade-left"
                            data-aos-duration={3200}
                        >
                            <div className="choose-image">
                                <img
                                    src={require('./img/search-engine-marketing.webp')}
                                    alt="Search Engine Marketing"
                                />
                            </div>
                        </div>
                        <div className="col-md-12 mt-50">
                            <p className="text-justify">
                                We take control of each visitor and their activities on your website
                                through different tools and technologies. So you are well aware
                                about the number of visitors visits your site each day, where they
                                are coming from and how they are coming to your website and which
                                page they found very useful. You can tell us which part of your
                                website is most important for monitoring the marketing goals and
                                conversions, so we will customize and give a specific report of your
                                goals and conversions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="choose-section mobilehide">
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-5 col-md-12"
                            data-aos="fade-left"
                            data-aos-duration={3200}
                        >
                            <div className="choose-image">
                                <img
                                    src={require('./img/search-engine-marketing.webp')}
                                    alt="Search Engine Marketing"
                                />
                            </div>
                        </div>
                        <div
                            className="col-lg-7 col-md-12"
                            data-aos="fade-right"
                            data-aos-duration={3200}
                        >
                            <div className="choose-content-area">
                                <div className="headtext">
                                    <h2>
                                        Search Engine Marketing - <span>SEM</span>
                                    </h2>
                                </div>
                                <p>
                                    SEM - Search Engine Marketing is the process of bringing your
                                    website to the top of the search engine results page through paid
                                    campaigns. Search results are custom created, paid and promoted
                                    with relevant keywords. Paid campaigns are instant Kickstarter for
                                    any business you want to promote online and get immediate leads
                                    and conversions. We offer different plans to promote your website
                                    through SEM based on your business model, monthly budget and
                                    target audience.
                                </p>
                                <p>
                                    {" "}
                                    The speciality of taking SEM services with us is we take care of
                                    each keyword that the user searches and clicks on your ad and each
                                    buck you spent for it. So we guarantee that your money was
                                    utilized in the most efficient way to promote your site.
                                </p>
                                <p>
                                    <b>Few of our SEO activities includes</b>
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="choose-text">
                                            <i className="fa fa-check-circle" />
                                            <p>Multiple AD creations</p>
                                        </div>
                                        <div className="choose-text">
                                            <i className="fa fa-check-circle" />
                                            <p>Adding keywords</p>
                                        </div>
                                        <div className="choose-text">
                                            <i className="fa fa-check-circle" />
                                            <p>Fixing daily budget</p>
                                        </div>
                                        <div className="choose-text">
                                            <i className="fa fa-check-circle" />
                                            <p>Automatic &amp; Manual Bidding</p>
                                        </div>
                                        <div className="choose-text">
                                            <i className="fa fa-check-circle" />
                                            <p>Keep track of budget of keywords</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="choose-text">
                                            <i className="fa fa-check-circle" />
                                            <p>Keep track of AD positions</p>
                                        </div>
                                        <div className="choose-text">
                                            <i className="fa fa-check-circle" />
                                            <p>Cross website advertising</p>
                                        </div>
                                        <div className="choose-text">
                                            <i className="fa fa-check-circle" />
                                            <p>Frequent keyword additions</p>
                                        </div>
                                        <div className="choose-text">
                                            <i className="fa fa-check-circle" />
                                            <p>Regular campaign optimization</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-50">
                            <p className="text-justify">
                                We take control of each visitor and their activities on your website
                                through different tools and technologies. So you are well aware
                                about the number of visitors visits your site each day, where they
                                are coming from and how they are coming to your website and which
                                page they found very useful. You can tell us which part of your
                                website is most important for monitoring the marketing goals and
                                conversions, so we will customize and give a specific report of your
                                goals and conversions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="advsection rs-services main-home">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-12 headtext text-center"
                            style={{ marginBottom: 50 }}
                        >
                            <h2>Advantages</h2>
                            <hr />
                        </div>
                        <div
                            className="col-lg-4 mb-55 col-md-6"
                            data-aos="zoom-in-down"
                            data-aos-duration={3200}
                        >
                            <div className="services-item">
                                <div className="services-icon">
                                    <img src={require('./img/digital-marketing/test/sell.webp')} alt="Sell" />
                                </div>
                                <div className="services-text">
                                    <h2 className="title">Sell</h2>
                                    <p className="services-txt">
                                        {" "}
                                        Opens new avenues to sell your products &amp; services
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 mb-55 col-md-6"
                            data-aos="zoom-in-down"
                            data-aos-duration={3200}
                        >
                            <div className="services-item">
                                <div className="services-icon">
                                    <img
                                        src={require('./img/digital-marketing/test/visibility.webp')}
                                        alt="Visibility"
                                    />
                                </div>
                                <div className="services-text">
                                    <h2 className="title">Visibility</h2>
                                    <p className="services-txt">
                                        {" "}
                                        Gives better visibility to your business and brand
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 mb-55 col-md-6"
                            data-aos="zoom-in-down"
                            data-aos-duration={3200}
                        >
                            <div className="services-item">
                                <div className="services-icon">
                                    <img
                                        src={require('./img/digital-marketing/test/increase-business.webp')}
                                        alt="Increase Business"
                                    />
                                </div>
                                <div className="services-text">
                                    <h2 className="title">Increase Business</h2>
                                    <p className="services-txt">
                                        {" "}
                                        Drives more traffic to your website which in turn increases
                                        business conversions
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 md-mb-55 col-md-6 mb-55"
                            data-aos="zoom-in-down"
                            data-aos-duration={3200}
                        >
                            <div className="services-item">
                                <div className="services-icon">
                                    <img
                                        src={require('./img/digital-marketing/test/marketing.webp')}
                                        alt="Marketing"
                                    />
                                </div>
                                <div className="services-text">
                                    <h2 className="title">Marketing</h2>
                                    <p className="services-txt">
                                        {" "}
                                        Multiplies the possibilities of marketing by breaking physical
                                        boundaries
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 sm-mb-55 mb-55 col-md-6"
                            data-aos="zoom-in-down"
                            data-aos-duration={3200}
                        >
                            <div className="services-item">
                                <div className="services-icon">
                                    <img
                                        src={require('./img/digital-marketing/test/targeting.webp')}
                                        alt="Targeting"
                                    />
                                </div>
                                <div className="services-text">
                                    <h2 className="title">Targeting</h2>
                                    <p className="services-txt">
                                        {" "}
                                        Targeting the right audience which gives potential leads &amp;
                                        customers
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 mb-55"
                            data-aos="zoom-in-down"
                            data-aos-duration={3200}
                        >
                            <div className="services-item">
                                <div className="services-icon">
                                    <img
                                        src={require('./img/digital-marketing/test/capitalize.webp')}
                                        alt="Capitalize"
                                    />
                                </div>
                                <div className="services-text">
                                    <h2 className="title">Capitalize</h2>
                                    <p className="services-txt">
                                        {" "}
                                        Helps to capitalize the market and stay ahead of others
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="facts factpad"
                style={{ background: "#f02c2c", padding: "60px 0" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ctr">
                            <h2 className="sublink1 text-center text-white">
                                Kick start your Digital Marketing Campaign Today
                            </h2>
                            <a
                                className="btn-template"
                                href="#"
                                data-toggle="modal"
                                data-target="#exampleModal"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reasons-one desktophide">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-4"
                            data-aos="zoom-in-left"
                            data-aos-duration={3200}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}
                        >
                            <div className="reasons-one__left">
                                <div className="headtext text-left">
                                    <h2>
                                        Why <span>Social Media</span> matters the most for businesses
                                        today?
                                    </h2>
                                </div>
                                <div className="reasons-one__img-two">
                                    <img
                                        src={require('./img/social-media-presence.webp')}
                                        alt="Social Media Presence"
                                    />
                                </div>
                                <div className="reasons-one__img-three reasons-one__img-two">
                                    <img
                                        src={require('./img/social-media-promotion.webp')}
                                        alt="Social Media Promotion"
                                    />
                                    <div className="reasons-one__shape-3" />
                                </div>
                                <p className="reasons-one__text-1 mt-70">
                                    Whether you like it or not, <b>social media</b> is a huge part of
                                    people's lives today, and that is not going to change any time
                                    soon.
                                </p>
                                <p className="reasons-one__text-1">
                                    Every day, the number of social media users increases. Every
                                    second, 11 people use social media for the first time. In 2017,
                                    less than 2.5 billion people were on social media worldwide.{" "}
                                    <b>Today in 2020, some 3.8 million people</b> use social media,
                                    which is more than half the world's population. So businesses with
                                    social media presence and promotion becomes an inevitable one.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-xl-8"
                            data-aos="zoom-in-right"
                            data-aos-duration={3200}
                        >
                            <div className="reasons-one__img-box">
                                <div className="reasons-one-img-box-bg" />
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="reasons-one__img-one">
                                            <img
                                                src={require('./img/social-media-business.webp')}
                                                alt="Social Media Business"
                                            />
                                            <div className="reasons-one__shape-1" />
                                            <div className="reasons-one__shape-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reasons-one mobilehide">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-4"
                            data-aos="zoom-in-left"
                            data-aos-duration={3200}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}
                        >
                            <div className="reasons-one__left">
                                <div className="headtext text-left">
                                    <h2>
                                        Why <span>Social Media</span> matters the most for businesses
                                        today?
                                    </h2>
                                </div>
                                <p className="reasons-one__text-1">
                                    Whether you like it or not, <b>social media</b> is a huge part of
                                    people's lives today, and that is not going to change any time
                                    soon.
                                </p>
                                <p className="reasons-one__text-1">
                                    Every day, the number of social media users increases. Every
                                    second, 11 people use social media for the first time. In 2017,
                                    less than 2.5 billion people were on social media worldwide.{" "}
                                    <b>Today in 2020, some 3.8 million people</b> use social media,
                                    which is more than half the world's population. So businesses with
                                    social media presence and promotion becomes an inevitable one.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-xl-8"
                            data-aos="zoom-in-right"
                            data-aos-duration={3200}
                        >
                            <div className="reasons-one__img-box">
                                <div className="reasons-one-img-box-bg" />
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="reasons-one__img-one">
                                            <img src={require('./img/social-media-business.webp')} alt="" />
                                            <div className="reasons-one__shape-1" />
                                            <div className="reasons-one__shape-2" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="reasons-one__img-two">
                                            <img src={require('./img/social-media-presence.webp')} alt="" />
                                        </div>
                                        <div className="reasons-one__img-three reasons-one__img-two">
                                            <img src={require('./img/social-media-promotion.webp')} alt="" />
                                            <div className="reasons-one__shape-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="social">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="headtext text-center">
                                <h2>
                                    <span>Social Media</span> Fact Sheet
                                </h2>
                                <hr />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="headtext text-center">
                                <br />
                                <h3 style={{ color: "#000000" }}>
                                    % of people use major social media platform on daily basis
                                </h3>
                            </div>
                            <div className="we-make__right">
                                <div className="we-make__progress">
                                    {/* <div class="we-make__progress-single">
									<table>
										<tr>
											<td></td>
											<td>Several times a day</td>
											<td>Once a day</td>
											<td>Less Often</td>
										</tr>
									</table>

								</div> */}
                                    <div className="we-make__progress-single mb-30">
                                        <div className="row">
                                            <div className="col-md-4 several">
                                                <div className="icobox sev"></div>
                                                <h4>Several times a day</h4>
                                            </div>
                                            <div className="col-md-4 several">
                                                <div className="icobox once"></div>
                                                <h4>Once a day</h4>
                                            </div>
                                            <div className="col-md-4 several">
                                                <div className="icobox less"></div>
                                                <h4>Less Often</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="we-make__progress-single">
                                        <img src={require('./img/digital-marketing/facebook.webp')} alt="" />
                                        <h4 className="we-make__progress-title">Facebook</h4>
                                        <div className="bar">
                                            <div
                                                className="bar-inner count-bar counted several"
                                                data-percent="51%"
                                                style={{ width: "51%" }}
                                            >
                                                <div className="count-text">51%</div>
                                            </div>
                                            <div
                                                className="bar-inner count-bar counted once"
                                                data-percent="23%"
                                                style={{ width: "23%" }}
                                            >
                                                <div className="count-text">23%</div>
                                            </div>
                                            <div
                                                className="bar-inner count-bar counted less"
                                                data-percent="26%"
                                                style={{ width: "26%" }}
                                            >
                                                <div className="count-text">26%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="we-make__progress-single">
                                        <img src={require('./img/digital-marketing/instagram.webp')} alt="" />
                                        <h4 className="we-make__progress-title">Instagram</h4>
                                        <div className="bar">
                                            <div
                                                className="bar-inner count-bar counted several"
                                                data-percent="42%"
                                                style={{ width: "42%" }}
                                            >
                                                <div className="count-text">42%</div>
                                            </div>
                                            <div
                                                className="bar-inner count-bar counted once"
                                                data-percent="21%"
                                                style={{ width: "21%" }}
                                            >
                                                <div className="count-text">21%</div>
                                            </div>
                                            <div
                                                className="bar-inner count-bar counted less"
                                                data-percent="37%"
                                                style={{ width: "37%" }}
                                            >
                                                <div className="count-text">37%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="we-make__progress-single">
                                        <img src={require('./img/digital-marketing/youtube.webp')} alt="" />
                                        <h4 className="we-make__progress-title">Youtube</h4>
                                        <div className="bar marb-0">
                                            <div
                                                className="bar-inner count-bar counted several"
                                                data-percent="32%"
                                                style={{ width: "32%" }}
                                            >
                                                <div className="count-text">32%</div>
                                            </div>
                                            <div
                                                className="bar-inner count-bar counted once"
                                                data-percent="19%"
                                                style={{ width: "19%" }}
                                            >
                                                <div className="count-text">19%</div>
                                            </div>
                                            <div
                                                className="bar-inner count-bar counted less"
                                                data-percent="49%"
                                                style={{ width: "49%" }}
                                            >
                                                <div className="count-text">49%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="we-make__progress-single">
                                        <img src={require('./img/digital-marketing/twitter.webp')} alt="" />
                                        <h4 className="we-make__progress-title">Twitter</h4>
                                        <div className="bar marb-0">
                                            <div
                                                className="bar-inner count-bar counted several"
                                                data-percent="25%"
                                                style={{ width: "25%" }}
                                            >
                                                <div className="count-text">25%</div>
                                            </div>
                                            <div
                                                className="bar-inner count-bar counted once"
                                                data-percent="17%"
                                                style={{ width: "17%" }}
                                            >
                                                <div className="count-text">17%</div>
                                            </div>
                                            <div
                                                className="bar-inner count-bar counted less"
                                                data-percent="58%"
                                                style={{ width: "58%" }}
                                            >
                                                <div className="count-text">58%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="times" data-aos="zoom-in" data-aos-duration={3200}>
                                <br />
                                <h3 className="text-center">Time spent on social media everyday</h3>
                                <div className="timesection">
                                    <div className="time1">
                                        <div className="row">
                                            <div
                                                className="col-md-6 timer"
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "center"
                                                }}
                                            >
                                                <h2>02:24</h2>
                                                <h4>2 Hours &amp; 24 Minutes</h4>
                                            </div>
                                            <div className="col-md-6">
                                                <h5>
                                                    An Average of 2 Hours &amp; 24 Minutes spent by an
                                                    individual daily on social media platforms
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="we-make__right timespent">
                                        <div className="we-make__progress">
                                            {/* <div class="we-make__progress-single">
											<table>
												<tr>
													<td></td>
													<td>Several times a day</td>
													<td>Once a day</td>
													<td>Less Often</td>
												</tr>
											</table>

										</div> */}
                                            <div className="we-make__progress-single">
                                                <img
                                                    src={require('./img/digital-marketing/facebook.webp')}
                                                    alt="Facebook"
                                                />
                                                <h4 className="we-make__progress-title">
                                                    Daily time spent on facebook: 58 mins
                                                </h4>
                                            </div>
                                            <div className="we-make__progress-single">
                                                <img
                                                    src={require('./img/digital-marketing/instagram.webp')}
                                                    alt="Instagram"
                                                />
                                                <h4 className="we-make__progress-title">
                                                    Daily time spent on Instagram: 53 mins
                                                </h4>
                                            </div>
                                            <div className="we-make__progress-single">
                                                <img
                                                    src={require('./img/digital-marketing/youtube.webp')}
                                                    alt="Youtube"
                                                />
                                                <h4 className="we-make__progress-title">
                                                    Daily time spent on Youtube: 40 mins
                                                </h4>
                                            </div>
                                            <div className="we-make__progress-single">
                                                <img
                                                    src={require('./img/digital-marketing/twitter.webp')}
                                                    alt="Twitter"
                                                />
                                                <h4 className="we-make__progress-title">
                                                    Daily time spent on Twitter: 1 min
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="whysection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" data-aos="zoom-in" data-aos-duration={3200}>
                            <h2 className="headtext">Why Dream Effects?</h2>
                            <p className="content">
                                Dream Effects Multimedia has an extensive track record for providing
                                various online business solutions with 15 years of industry
                                expertise. Have developed 100s of websites, web applications and
                                promoted them with organic SEO, PPC campaigns and social media
                                promotions. We are one among the few agencies who are early adopters
                                of digital marketing and social media promotions since it was
                                inducted into the industry
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="welcome-one" id="about1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="welcome-one__left">
                                <div className="welcome-one__img-box">
                                    <div className="welcome-one__img">
                                        <img
                                            src={require('./img/digital-marketing-strategy.webp')}
                                            alt="Digital Marketing Strategy"
                                        />
                                        <div className="welcome-one__shape-1" />
                                        <div className="welcome-one__shape-2" />
                                    </div>
                                    <div className="welcome-one__trusted">
                                        <h2 className="odometer-auto-theme">
                                            <span>Yes</span>
                                            <br /> We Know{" "}
                                            <span>
                                                <br />
                                                How
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="welcome-one__right">
                                <div className="headtext text-center">
                                    <h2>Know Hows</h2>
                                    <hr />
                                </div>
                                <div
                                    className="welcome-one__solutions"
                                    data-aos="fade-left"
                                    data-aos-duration={3200}
                                >
                                    <div className="welcome-one__solutions-single">
                                        <div className="welcome-one__solutions-icon">
                                            <i className="fa fa-check-circle" />
                                        </div>
                                        <div className="welcome-one__solutions-text-box">
                                            <p>
                                                To Develop a website with right procedure &amp; standards
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="welcome-one__solutions-single"
                                        data-aos="fade-left"
                                        data-aos-duration={3200}
                                    >
                                        <div className="welcome-one__solutions-icon">
                                            <i className="fa fa-check-circle" />
                                        </div>
                                        <div className="welcome-one__solutions-text-box">
                                            <p> To make a website optimized and search engine friendly</p>
                                        </div>
                                    </div>
                                    <div
                                        className="welcome-one__solutions-single"
                                        data-aos="fade-left"
                                        data-aos-duration={3200}
                                    >
                                        <div className="welcome-one__solutions-icon">
                                            <i className="fa fa-check-circle" />
                                        </div>
                                        <div className="welcome-one__solutions-text-box">
                                            <p>To promote the site in both organic and ppc campaigns</p>
                                        </div>
                                    </div>
                                    <div
                                        className="welcome-one__solutions-single"
                                        data-aos="fade-left"
                                        data-aos-duration={3200}
                                    >
                                        <div className="welcome-one__solutions-icon">
                                            <i className="fa fa-check-circle" />
                                        </div>
                                        <div className="welcome-one__solutions-text-box">
                                            <p>
                                                To create result oriented campaigns in google &amp; social
                                                media
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="welcome-one__solutions-single"
                                        data-aos="fade-left"
                                        data-aos-duration={3200}
                                    >
                                        <div className="welcome-one__solutions-icon">
                                            <i className="fa fa-check-circle" />
                                        </div>
                                        <div className="welcome-one__solutions-text-box">
                                            <p>
                                                To create engaging creative campaigns which draw business
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="welcome-one__solutions-single"
                                        data-aos="fade-left"
                                        data-aos-duration={3200}
                                    >
                                        <div className="welcome-one__solutions-icon">
                                            <i className="fa fa-check-circle" />
                                        </div>
                                        <div className="welcome-one__solutions-text-box">
                                            <p>
                                                To target the right audience with right products and
                                                services
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="rs-process style1 bg2 pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container">
                    <div className="row y-middle">
                        <div className="col-md-12">
                            <div className="col-md-12">
                                <div className="headtext text-center">
                                    <h2>How we work</h2>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container custom2">
                    <div className="process-effects-layer">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div
                                className="col-lg-2 col-md-6 md-mb-30"
                                data-aos="flip-right"
                                data-aos-duration={3200}
                            >
                                <div className="rs-addon-number">
                                    <div className="number-part">
                                        <div className="number-image">
                                            <img
                                                src={require('./img/digital-marketing/test/identify.webp')}
                                                alt="Identify"
                                            />
                                        </div>
                                        <div className="number-text">
                                            <div className="number-area">
                                                {" "}
                                                <span className="number-prefix"> 1 </span>
                                            </div>
                                            <div className="number-title">
                                                <h3 className="title"> Identify</h3>
                                            </div>
                                            <div className="number-txt">
                                                Identifying Business requirements &amp; logic, which always
                                                helps to provide the right service to get best results
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-2 col-md-6 md-mb-30 "
                                data-aos="flip-right"
                                data-aos-duration={3200}
                            >
                                <div className="rs-addon-number">
                                    <div className="number-part">
                                        <div className="number-image">
                                            <img
                                                src={require('./img/digital-marketing/test/choose.webp')}
                                                alt="Choose"
                                            />
                                        </div>
                                        <div className="number-text">
                                            <div className="number-area">
                                                {" "}
                                                <span className="number-prefix"> 2 </span>
                                            </div>
                                            <div className="number-title">
                                                <h3 className="title">Choose</h3>
                                            </div>
                                            <div className="number-txt">
                                                Choosing the right media for promotion. Because not every
                                                media is a right option for every business
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-2 col-md-6 sm-mb-30"
                                data-aos="flip-right"
                                data-aos-duration={3200}
                            >
                                <div className="rs-addon-number">
                                    <div className="number-part">
                                        <div className="number-image">
                                            <img
                                                src={require('./img/digital-marketing/test/target.webp')}
                                                alt="Target"
                                            />
                                        </div>
                                        <div className="number-text">
                                            <div className="number-area">
                                                {" "}
                                                <span className="number-prefix"> 3 </span>
                                            </div>
                                            <div className="number-title">
                                                <h3 className="title">Target</h3>
                                            </div>
                                            <div className="number-txt">
                                                Campaign planning, budget and targetting the correct
                                                audience &amp; geo location
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-2 col-md-6"
                                data-aos="flip-right"
                                data-aos-duration={3200}
                            >
                                <div className="rs-addon-number">
                                    <div className="number-part">
                                        <div className="number-image">
                                            <img
                                                src={require('./img/digital-marketing/test/create.webp')}
                                                alt="Create"
                                            />
                                        </div>
                                        <div className="number-text">
                                            <div className="number-area">
                                                {" "}
                                                <span className="number-prefix"> 4 </span>
                                            </div>
                                            <div className="number-title">
                                                <h3 className="title">Create</h3>
                                            </div>
                                            <div className="number-txt">
                                                Create engaging creatives and content which can create brand
                                                awareness &amp; business conversions
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-2 col-md-6"
                                data-aos="flip-right"
                                data-aos-duration={3200}
                            >
                                <div className="rs-addon-number">
                                    <div className="number-part">
                                        <div className="number-image">
                                            <img src={require('./img/digital-marketing/test/run.webp')} alt="Run" />
                                        </div>
                                        <div className="number-text">
                                            <div className="number-area">
                                                {" "}
                                                <span className="number-prefix"> 5 </span>
                                            </div>
                                            <div className="number-title">
                                                <h3 className="title">Run</h3>
                                            </div>
                                            <div className="number-txt">
                                                Scheduling and Running the campaign along with regular
                                                management and optimizations
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section style={{ padding: "50px 0" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ctr">
                            <h2 className="sublink1 text-center">
                                Kick start your Digital Marketing Campaign Today{" "}
                            </h2>
                            <a
                                className="btn-template1 "
                                data-toggle="modal"
                                data-target="#exampleModal"
                            >
                                Get Started
                            </a>
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
                            <form name="quote-frm" method="post" action="query.php">
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="f-7 mb-10">
                                            Which marketing channel would you like to promote your
                                            business?
                                        </label>
                                    </div>
                                    <div className="col-md-12 typemarket">
                                        <ul className="check-inline">
                                            <li>
                                                <h4>Search Marketing</h4>
                                            </li>
                                            <li>
                                                <label>
                                                    {" "}
                                                    <input
                                                        className="frmradio"
                                                        type="checkbox"
                                                        name="SearchMarketing"
                                                        defaultValue="Google Ads"
                                                    />{" "}
                                                    Google Ads
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    {" "}
                                                    <input
                                                        className="frmradio"
                                                        type="checkbox"
                                                        name="SearchMarketing"
                                                        defaultValue="Business Ads"
                                                    />{" "}
                                                    Business Ads
                                                </label>
                                            </li>
                                            <li className="op-0">
                                                <label>LinkedIn</label>
                                            </li>
                                            <li className="op-0">
                                                <label>LinkedIn</label>
                                            </li>
                                        </ul>
                                        <ul className="check-inline">
                                            <li>
                                                <h4>Social Media</h4>
                                            </li>
                                            <li>
                                                <label>
                                                    <input
                                                        className="frmradio"
                                                        type="checkbox"
                                                        name="SocialMedia"
                                                        defaultValue="Facebook"
                                                    />{" "}
                                                    Facebook
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    {" "}
                                                    <input
                                                        className="frmradio"
                                                        type="checkbox"
                                                        name="SocialMedia"
                                                        defaultValue="Instagram"
                                                    />{" "}
                                                    Instagram
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    {" "}
                                                    <input
                                                        className="frmradio"
                                                        type="checkbox"
                                                        name="SocialMedia"
                                                        defaultValue="Twitter"
                                                    />
                                                    Twitter
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    {" "}
                                                    <input
                                                        className="frmradio"
                                                        type="checkbox"
                                                        name="SocialMedia"
                                                        defaultValue="Linkedin"
                                                    />
                                                    LinkedIn
                                                </label>
                                            </li>
                                        </ul>
                                        <ul className="check-inline">
                                            <li>
                                                <h4>Video Ads</h4>
                                            </li>
                                            <li>
                                                <label>
                                                    {" "}
                                                    <input
                                                        className="frmradio"
                                                        type="checkbox"
                                                        name="VideoAds"
                                                        defaultValue="youtube"
                                                    />
                                                    Youtube
                                                </label>
                                            </li>
                                            <li className="op-0">
                                                <label>LinkedIn</label>
                                            </li>
                                            <li className="op-0">
                                                <label>LinkedIn</label>
                                            </li>
                                            <li className="op-0">
                                                <label>LinkedIn</label>
                                            </li>
                                        </ul>
                                        <ul className="check-inline">
                                            <li>
                                                <h4>E-mail Marketing</h4>
                                            </li>
                                            <li>
                                                <label>
                                                    {" "}
                                                    <input
                                                        className="frmradio"
                                                        type="checkbox"
                                                        name="EmailMarketing"
                                                        defaultValue="Email Campaigns"
                                                    />
                                                    Email Campaigns
                                                </label>
                                            </li>
                                            <li className="op-0">
                                                <label>LinkedIn</label>
                                            </li>
                                            <li className="op-0">
                                                <label>LinkedIn</label>
                                            </li>
                                            <li className="op-0">
                                                <label>LinkedIn</label>
                                            </li>
                                        </ul>
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
                                        <select
                                            name="duration"
                                            className="field_box1 form-control"
                                            id="duration"
                                            required=""
                                        >
                                            <option value="" selected="selected">
                                                Campaign Duration
                                            </option>
                                            <option value="Minimum 1 Month">Minimum 1 Month</option>
                                            <option value="Upto 6 Months">Upto 6 Months</option>
                                            <option value="Upto 1 Year">Upto 1 Year</option>
                                            <option value="Regular (Monthly)">Regular (Monthly)</option>
                                            <option value="Onetime Campaign">Onetime Campaign</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <select
                                            name="budget"
                                            className="field_box1 form-control"
                                            id="budget"
                                            required=""
                                        >
                                            <option value="" selected="selected">
                                                Your Monthly Budget
                                            </option>
                                            <option value="Below 20K INR">Below 20K INR</option>
                                            <option value="Upto 50K INR">Upto 50K INR</option>
                                            <option value="Upto 1 Lakh">Upto 1 Lakh</option>
                                            <option value="More than 1 Lakh">More than 1 Lakh</option>
                                        </select>
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
                                        <input
                                            type="text"
                                            name="website"
                                            placeholder="website"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <textarea
                                            className="form-control"
                                            placeholder="Your Message"
                                            name="queries"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-md-6">
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
                                            name="digitalsubmit"
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