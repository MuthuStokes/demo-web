
import React from 'react';
import bannerImg from './img/banner2.webp';


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

        </div>
  );
};
  
export default Home;