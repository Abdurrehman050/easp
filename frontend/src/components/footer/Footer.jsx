import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <Link target="/" className="link menuLink" to="/gigs?cat=plumber">
              Plumber
            </Link>
            <Link
              target="/"
              className="link menuLink"
              to={`/gigs?cat=${encodeURIComponent("bike & mechanic")}`}
            >
              Bike &amp; Car Mechanic
            </Link>
            <Link target="/" className="link menuLink" to="/gigs?cat=gardener">
              Gardener
            </Link>
            <Link
              target="/"
              className="link menuLink"
              to="/gigs?cat=electrician"
            >
              Electrician
            </Link>
            <Link
              target="/"
              className="link menuLink"
              to={`/gigs?cat=${encodeURIComponent("maid services")}`}
            >
              Maid Services
            </Link>
            <Link target="/" className="link menuLink" to="/gigs?cat=carpenter">
              Carpenter
            </Link>
            <Link
              target="/"
              className="link menuLink"
              to={`/gigs?cat=${encodeURIComponent("ac services")}`}
            >
              AC Services
            </Link>
            <Link target="/" className="link menuLink" to="/gigs?cat=lifestyle">
              Lifestyle
            </Link>
          </div>
          <div className="item">
            <h2>Support</h2>

            <span>
              <a href="/help&support">How to use</a>
            </span>
            <span>
              <a href="/aboutUs">About Us</a>
            </span>
            <span>
              <a href="/termANDcondition">Terms & Conditions</a>
            </span>
            <span>
              <a href="/faqs">FAQ's</a>
            </span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>
              <a href="/register">Register</a>
            </span>
            <span>
              <a href="/login">Login</a>
            </span>

            <span>
              <a href="/register">Become a Seller</a>
            </span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Easp</h2>
            <span>
              <a href="/">© Efficient Automated Service Provider Ltd. 2023</a>
            </span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>
                <a href="/">English</a>
              </span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>
                <a href="/">PKR</a>
              </span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
