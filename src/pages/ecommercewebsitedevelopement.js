import React from 'react';
import background from "./img/ecomm-bg.png";

const Contact = () => {

    return (
        <>
            <div className="rs-breadcrumbs rs-breadcrumbs1 img2 ecommerce" style={{ backgroundImage: `url(${background}),linear-gradient(to right, #4c65af,#3bbfff)` }} >
                <div className="breadcrumbs-inner">
                    <div className="container">
                        <div className="row">
                            <h1 className="page-title">E-Commerce</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="welcome-one welcome" id="about">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-6"
                            data-aos="zoom-out-right"
                            data-aos-duration={3200}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}
                        >
                            <div className="headtext text-left">
                                <h3>Build a powerful </h3>
                                <h2>E-Commerce website for your Business</h2>
                            </div>
                            <div className="welcome-one__right">
                                <p className="text-justify">
                                    Start your online store and sell your products online. With more
                                    than a decade of experience, we stand as one of the most trusted
                                    web design and development companies in Chennai, India. We offer
                                    everything to start your own online store. Whether your business
                                    is small and dealing few products or a multi product super store,
                                    we have solution for everyone. We empower online businesses of
                                    various industry verticals.
                                </p>
                                <a className="btn-theme" href="contact-us?contactform">
                                    Get your Online Store
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-xl-6"
                            data-aos="zoom-out-left"
                            data-aos-duration={3200}
                        >
                            <img
                                src={require('./img/ecommerce/ecommerce-illustration.webp')}
                                alt="Ecommerce"
                                style={{ width: "100%" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="advsection ecomm"
                style={{ background: "url(img/pattern-2.png)" }}
            >
                <div className="container">
                    <div
                        className="row mobhide"
                        data-aos="zoom-in-down"
                        data-aos-duration={3200}
                    >
                        <div
                            className="col-md-12 headtext text-center"
                            style={{ marginBottom: 50 }}
                        >
                            <h2>Power Packed Features</h2>
                            <hr />
                        </div>
                        <div className="col-md-4">
                            <ul className="linklist">
                                <li className="link1">Store &amp; Product Management</li>
                                <li className="link2">Order &amp; Shipping Management</li>
                                <li className="link3">Customer Management</li>
                                <li className="link4">Payment Integration</li>
                                <li className="link5">Discounts &amp; Promotions</li>
                                <li className="link6">Responsive Design</li>
                                <li className="link7">Admin Management</li>
                                <li className="link8">Dashboard</li>
                                <li className="link9">Blog (On Demand)</li>
                            </ul>
                        </div>
                        <div
                            className="col-md-8"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}
                        >
                            <div className="adv adv1">
                                <div className="imgsection">
                                    <img
                                        src={require('./img/ecommerce/test/store-product-management.webp')}
                                        alt="Store & Product Management"
                                    />
                                </div>
                                <h3>Store &amp; Product Management</h3>
                                <p>
                                    All Products and its details, content, images and price can be
                                    added and maintained. Product category and sub categories can be
                                    created, Brands can be assigned. Contains modules to maintain
                                    stock, rates and tax calculations
                                </p>
                            </div>
                            <div className="adv adv2">
                                <div className="imgsection">
                                    <img
                                        src={require('./img/ecommerce/test/order-shipping-management.webp')}
                                        alt="Order Shipping Management"
                                    />
                                </div>
                                <h3>Order &amp; Shipping Management</h3>
                                <p>
                                    Users can easily find their products using various options like
                                    categories, brands, price range and even they can search to get
                                    their required product. They can add their products to their cart
                                    and finally checkout to place the order
                                </p>
                            </div>
                            <div className="adv adv3">
                                <div className="imgsection">
                                    <img
                                        src={require('./img/ecommerce/test/customer-management.webp')}
                                        alt="Customer Management"
                                    />
                                </div>
                                <h3>Customer Management</h3>
                                <p>
                                    Managing customers and their contact details, order information
                                    and other details can be managed hassle free. That may help you to
                                    provide personalised offers to frequent visitors.
                                </p>
                                <br />
                            </div>
                            <div className="adv adv4">
                                <div className="imgsection">
                                    <img
                                        src={require('./img/ecommerce/test/payment-integration.webp')}
                                        alt="Payment Integration"
                                    />
                                </div>
                                <h3>Payment Integration</h3>
                                <p>
                                    Payment Gateways can be integrated to the store to accept online
                                    payments. Suggestions and guidelines to acquire payment gateways
                                    will be provided.
                                </p>
                            </div>
                            <div className="adv adv5">
                                <div className="imgsection">
                                    <img
                                        src={require('./img/ecommerce/test/discounts-promotions.webp')}
                                        alt="Discounts & Promotions"
                                    />
                                </div>
                                <h3>Discounts &amp; Promotions</h3>
                                <p>
                                    Options to create and manage promotional coupon codes,
                                    product-based discounts and conditions available to comfortably
                                    manage the offers
                                </p>
                            </div>
                            <div className="adv adv6">
                                <div className="imgsection">
                                    <img
                                        src={require('./img/ecommerce/test/responsive-design.webp')}
                                        alt="Responsive Design"
                                    />
                                </div>
                                <h3>Responsive Design</h3>
                                <p>
                                    The website is fully responsive in design,you online store is
                                    adaptable and change its appearance and behaviour based on the
                                    mobile device it has been accessed.
                                </p>
                            </div>
                            <div className="adv adv7">
                                <div className="imgsection">
                                    <img
                                        src={require('./img/ecommerce/test/admin-management.webp')}
                                        alt="Admin Management"
                                    />
                                </div>
                                <h3>Admin Management</h3>
                                <p>
                                    You can set the users(staffs) of your business and their access
                                    rights to manage your online store with correct access permissions
                                    where whom to add products and whom to manage orders and
                                    deliveries without giving full administration rights
                                </p>
                            </div>
                            <div className="adv adv8">
                                <div className="imgsection">
                                    <img src={require('./img/ecommerce/test/dashboard.webp')} alt="Dashboard" />
                                </div>
                                <h3>Dashboard</h3>
                                <p>
                                    The dashboard allows you to view all orders, sales details,
                                    revenue and other metrics in a summarised way. Custom reports can
                                    also be created.
                                </p>
                                <br />
                            </div>
                            <div className="adv adv9">
                                <div className="imgsection">
                                    <img src={require('./img/ecommerce/test/blog.webp')} alt="Blog" />
                                </div>
                                <h3>Blog (On Demand)</h3>
                                <p>
                                    Blog can also be integrated on demand, which helps the customer
                                    and other visitors to have more engagement on the website with
                                    relevant product and business based stories and articles.
                                </p>
                                <br />
                            </div>
                        </div>
                        
                    </div>
                    <div className="row deskhide">
                        <div
                            className="col-md-12 headtext text-center"
                            style={{ marginBottom: 50 }}
                        >
                            <h2>Power Packed Features</h2>
                            <hr />
                        </div>
                        <div
                            id="multi-item-example"
                            className="carousel slide carousel-multi-item"
                            data-ride="carousel"
                        >
                            
                            <div className="carousel-inner bs-boxcarousel" role="listbox">
                                
                                <div className="carousel-item active">
                                    <div className="col-md-4">
                                        <div className="adv">
                                            <div className="imgsection">
                                                <img
                                                    src={require('./img/ecommerce/test/store-product-management.webp')}
                                                    alt="Store & Product Management"
                                                />
                                            </div>
                                            <h3>Store &amp; Product Management</h3>
                                            <p>
                                                All Products and its details, content, images and price can
                                                be added and maintained. Product category and sub categories
                                                can be created, Brands can be assigned. Contains modules to
                                                maintain stock, rates and tax calculations
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-4">
                                        <div className="adv">
                                            <div className="imgsection">
                                                <img
                                                    src={require('./img/ecommerce/test/order-shipping-management.webp')}
                                                    alt="Order & Shipping Management"
                                                />
                                            </div>
                                            <h3>Order &amp; Shipping Management</h3>
                                            <p>
                                                Users can easily find their products using various options
                                                like categories, brands, price range and even they can
                                                search to get their required product. They can add their
                                                products to their cart and finally checkout to place the
                                                order
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-4">
                                        <div className="adv">
                                            <div className="imgsection">
                                                <img
                                                    src={require('./img/ecommerce/test/customer-management.webp')}
                                                    alt="Customer Management"
                                                />
                                            </div>
                                            <h3>Customer Management</h3>
                                            <p>
                                                Managing customers and their contact details, order
                                                information and other details can be managed hassle free.
                                                That may help you to provide personalised offers to frequent
                                                visitors.
                                            </p>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-4">
                                        <div className="adv">
                                            <div className="imgsection">
                                                <img
                                                    src={require('./img/ecommerce/test/payment-integration.webp')}
                                                    alt="Payment Integration"
                                                />
                                            </div>
                                            <h3>Payment Integration</h3>
                                            <p>
                                                Payment Gateways can be integrated to the store to accept
                                                online payments. Suggestions and guidelines to acquire
                                                payment gateways will be provided.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-4">
                                        <div className="adv">
                                            <div className="imgsection">
                                                <img
                                                    src={require('./img/ecommerce/test/discounts-promotions.webp')}
                                                    alt="Discounts & Promotions"
                                                />
                                            </div>
                                            <h3>Discounts &amp; Promotions</h3>
                                            <p>
                                                Options to create and manage promotional coupon codes,
                                                product-based discounts and conditions available to
                                                comfortably manage the offers
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-4">
                                        <div className="adv">
                                            <div className="imgsection">
                                                <img
                                                    src={require('./img/ecommerce/test/responsive-design.webp')}
                                                    alt="Responsive Design"
                                                />
                                            </div>
                                            <h3>Responsive Design</h3>
                                            <p>
                                                The website is fully responsive in design,you online store
                                                is adaptable and change its appearance and behaviour based
                                                on the mobile device it has been accessed.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-4">
                                        <div className="adv">
                                            <div className="imgsection">
                                                <img
                                                    src={require('./img/ecommerce/test/admin-management.webp')}
                                                    alt="Admin Management"
                                                />
                                            </div>
                                            <h3>Admin Management</h3>
                                            <p>
                                                You can set the users(staffs) of your business and their
                                                access rights to manage your online store with correct
                                                access permissions where whom to add products and whom to
                                                manage orders and deliveries without giving full
                                                administration rights
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-4">
                                        <div className="adv">
                                            <div className="imgsection">
                                                <img
                                                    src={require('./img/ecommerce/test/dashboard.webp')}
                                                    alt="Dashboard"
                                                />
                                            </div>
                                            <h3>Dashboard</h3>
                                            <p>
                                                The dashboard allows you to view all orders, sales details,
                                                revenue and other metrics in a summarised way. Custom
                                                reports can also be created.
                                            </p>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-md-4">
                                        <div className="adv">
                                            <div className="imgsection">
                                                <img src={require('./img/ecommerce/test/blog.webp')} alt="Blog" />
                                            </div>
                                            <h3>Blog (On Demand)</h3>
                                            <p>
                                                Blog can also be integrated on demand, which helps the
                                                customer and other visitors to have more engagement on the
                                                website with relevant product and business based stories and
                                                articles.
                                            </p>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="controls-top">
                                <a
                                    className="btn-floating"
                                    href="#multi-item-example"
                                    data-slide="prev"
                                >
                                    <i className="fa fa-chevron-left" />
                                </a>
                                <a
                                    className="btn-floating"
                                    href="#multi-item-example"
                                    data-slide="next"
                                >
                                    <i className="fa fa-chevron-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="facts"
                style={{ background: "#f02c2c", padding: "60px 0" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ctr">
                            <h2 className="sublink1 text-center" style={{ color: "#fff" }}>
                                Build your E-Commerce Website Today{" "}
                            </h2>
                            <a className="btn-template" href="contact-us?contactform">
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="facts">
                <div className="container">
                    <div className="row factbox1">
                        <div className="col-md-6 imgsection">
                            <img
                                src={require('./img/business-engagement.webp')}
                                alt="Business Engagement"
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className="col-md-6">
                            <div className=" fact1">
                                <div className="headtext">
                                    <h2>Business Engagement Addons</h2>
                                    <hr />
                                </div>
                                <ul className="listtags">
                                    <li data-aos="zoom-in-down" data-aos-duration={3200}>
                                        <i className="fa fa-check-circle" />
                                        Analytics can be integrated, which helps to know the number of
                                        visitors of the site, their location, their search intention,
                                        user demography and so on.
                                    </li>
                                    <li data-aos="zoom-in-down" data-aos-duration={3200}>
                                        <i className="fa fa-check-circle" />
                                        Live Chat can be integrated to respond the user queries on site
                                        instantly. This supports on both sales and support areas.
                                    </li>
                                    <li data-aos="zoom-in-down" data-aos-duration={3200}>
                                        <i className="fa fa-check-circle" />
                                        Auto messages about the recent purchases of others
                                    </li>
                                    <li data-aos="zoom-in-down" data-aos-duration={3200}>
                                        <i className="fa fa-check-circle" />
                                        New Arrivals and Promotion popups
                                    </li>
                                    <li data-aos="zoom-in-down" data-aos-duration={3200}>
                                        <i className="fa fa-check-circle" />
                                        SMS alerts for order confirmation, status &amp; promotions
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="welcome-one" id="about1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="headtext text-center">
                                <h2>Building Ecommerce Online Stores</h2>
                                <h3>for different Businessess</h3>
                                <hr />
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration={3200}>
                            <div
                                className="eg-card category-card1 style2 wow fadeInDown"
                                data-wow-duration="1.5s"
                                data-wow-delay="0.4s"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "1.5s",
                                    animationDelay: "0.4s",
                                    animationName: "fadeInDown"
                                }}
                            >
                                <div className="cat-icon">
                                    <img
                                        src={require('./img/ecommerce/test/grocery-stores.webp')}
                                        alt="Grocery Stores"
                                    />
                                </div>
                                <h5>Grocery Stores</h5>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration={3200}>
                            <div
                                className="eg-card category-card1 style2 wow fadeInDown"
                                data-wow-duration="1.5s"
                                data-wow-delay="0.4s"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "1.5s",
                                    animationDelay: "0.4s",
                                    animationName: "fadeInDown"
                                }}
                            >
                                <div className="cat-icon">
                                    <img
                                        src={require('./img/ecommerce/test/electronics-showrooms.webp')}
                                        alt="Electronics Showrooms"
                                    />
                                </div>
                                <h5>Electronics Showrooms</h5>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration={3200}>
                            <div
                                className="eg-card category-card1 style2 wow fadeInDown"
                                data-wow-duration="1.5s"
                                data-wow-delay="0.4s"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "1.5s",
                                    animationDelay: "0.4s",
                                    animationName: "fadeInDown"
                                }}
                            >
                                <div className="cat-icon">
                                    <img
                                        src={require('./img/ecommerce/test/fashion-stores.webp')}
                                        alt="Fashion Stores"
                                    />
                                </div>
                                <h5>Fashion Apparels Sellers</h5>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration={3200}>
                            <div
                                className="eg-card category-card1 style2 wow fadeInDown"
                                data-wow-duration="1.5s"
                                data-wow-delay="0.4s"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "1.5s",
                                    animationDelay: "0.4s",
                                    animationName: "fadeInDown"
                                }}
                            >
                                <div className="cat-icon">
                                    <img
                                        src={require('./img/ecommerce/test/bakeries-sweetstalls.webp')}
                                        alt="Bakeries & Sweetstalls"
                                    />
                                </div>
                                <h5>Bakeries &amp; Sweet Stalls</h5>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration={3200}>
                            <div
                                className="eg-card category-card1 style2 wow fadeInDown"
                                data-wow-duration="1.5s"
                                data-wow-delay="0.4s"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "1.5s",
                                    animationDelay: "0.4s",
                                    animationName: "fadeInDown"
                                }}
                            >
                                <div className="cat-icon">
                                    <img
                                        src={require('./img/ecommerce/test/jewellery-showrooms.webp')}
                                        alt="Jewellery & Showrooms"
                                    />
                                </div>
                                <h5>Jewellery Showrooms</h5>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration={3200}>
                            <div
                                className="eg-card category-card1 style2 wow fadeInDown"
                                data-wow-duration="1.5s"
                                data-wow-delay="0.4s"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "1.5s",
                                    animationDelay: "0.4s",
                                    animationName: "fadeInDown"
                                }}
                            >
                                <div className="cat-icon">
                                    <img
                                        src={require('./img/ecommerce/test/restaurants-cafes.webp')}
                                        alt="Restaurants & Cafes"
                                    />
                                </div>
                                <h5>Restaurants &amp; Cafes</h5>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration={3200}>
                            <div
                                className="eg-card category-card1 style2 wow fadeInDown"
                                data-wow-duration="1.5s"
                                data-wow-delay="0.4s"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "1.5s",
                                    animationDelay: "0.4s",
                                    animationName: "fadeInDown"
                                }}
                            >
                                <div className="cat-icon">
                                    <img
                                        src={require('./img/ecommerce/test/furniture-shops.webp')}
                                        alt="Furniture Shops"
                                    />
                                </div>
                                <h5>Furniture Shops</h5>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration={3200}>
                            <div
                                className="eg-card category-card1 style2 wow fadeInDown"
                                data-wow-duration="1.5s"
                                data-wow-delay="0.4s"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "1.5s",
                                    animationDelay: "0.4s",
                                    animationName: "fadeInDown"
                                }}
                            >
                                <div className="cat-icon">
                                    <img
                                        src={require('./img/ecommerce/test/stationary-product-sellers.webp')}
                                        alt="Stationary Product Sellers"
                                    />
                                </div>
                                <h5>Stationary Product Sellers</h5>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration={3200}>
                            <div
                                className="eg-card category-card1 style2 wow fadeInDown"
                                data-wow-duration="1.5s"
                                data-wow-delay="0.4s"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "1.5s",
                                    animationDelay: "0.4s",
                                    animationName: "fadeInDown"
                                }}
                            >
                                <div className="cat-icon">
                                    <img
                                        src={require('./img/ecommerce/test/books-digital-products.webp')}
                                        alt="Books & Digital Products"
                                    />
                                </div>
                                <h5>Books &amp; Digital Products</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ padding: "50px 0" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ctr">
                            <h2 className="sublink1 text-center">
                                Build your E-Commerce Website Today{" "}
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