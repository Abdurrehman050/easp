import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>
              {" "}
              <a href="/">Plumber</a>
            </span>
            <span>
              <a href="/">Bike & Car Mechanic</a>
            </span>
            <span>
              <a href="/">Gardener</a>
            </span>
            <span>
              <a href="/">Electrician</a>
            </span>
            <span>
              <a href="/">Maid Services</a>
            </span>
            <span>
              <a href="/">Carpenter</a>
            </span>
            <span>
              <a href="/">AC Services</a>
            </span>
            <span>
              <a href="/">Lifestyle</a>
            </span>
          </div>

          <div className="item">
            <h2>Support</h2>
            <span>
              <a href="/">Help & Support</a>
            </span>
            <span>
              <a href="/">Trust & Safety</a>
            </span>
            <span>
              <a href="/">Selling on Easp</a>
            </span>
            <span>
              <a href="/">Buying on Easp</a>
            </span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>
              <a href="/">Customer Success Stories</a>
            </span>

            <span>
              <a href="/">Blog</a>
            </span>
            <span>
              <a href="/">Podcast</a>
            </span>
            <span>
              <a href="/">Invite a Friend</a>
            </span>
            <span>
              <a href="/">Become a Seller</a>
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
