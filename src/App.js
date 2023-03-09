import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Careers from './pages/careers';
import Branding from './pages/branding';
import BrandAdvertisements from './pages/brandadvertisements';
import CompanyProfile from './pages/companyprofile';
import DM from './pages/digitalmarketing';
import Ecomm from './pages/ecommercewebsitedevelopement';
import Founder from './pages/founder';
import Portfolio from './pages/portfolio';
import SEO from './pages/seo';
import Web from './pages/webdesignchennai';
import WebPortfolio from './pages/webportfolio';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route path='/about' element={<CompanyProfile />} />
                <Route path='/contact-us' element={<Contact />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/branding' element={<Branding />} />
                <Route path='/brand-identity-advertisements' element={<BrandAdvertisements />} />
                <Route path='/digital-marketing' element={<DM />} />
                <Route path='/ecommerce-website-developement' element={<Ecomm />} />
                <Route path='/founder-dream-effects' element={<Founder />} />
                <Route path='/portfolio-brochures-product-packages' element={<Portfolio />} />
                <Route path='/seo-search-engine-optimization' element={<SEO />} />
                <Route path='/web-design-chennai' element={<Web />} />
                <Route path='/web-design-portfolio' element={<WebPortfolio />} />
                <Route path='/careers' element={<Careers />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;