import React from 'react';
import Link from 'found/lib/Link';
import './footer.scss';

const Footer = () => (
  <footer>
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <h4>Information</h4>
            <ul>
              <li>
                <Link to="/">About Us </Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <h4>SERVICES</h4>
            <ul>
              <li>
                <Link to="/">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link to="/">Shipping Rates Policies</Link>
              </li>
              <li>
                <Link to="/">Returns and Refunds Policies</Link>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <h4>Secured with</h4>
            <img src="/public/images/footer-security.png" alt="security" />
          </div>
          <div className="col-auto">
            <h4>Payment Acceptance</h4>
            <img src="/public/images/footer-payment.png" alt="payment" />
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-auto left">
            Copyright &copy; 2009-2018 The Auto Parts Shop. All Rights
            Reserved.
          </div>
          <div className="col-auto right">
            <Link to="/">Privacy Policies</Link> | <Link to="/">Sitemaps</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
