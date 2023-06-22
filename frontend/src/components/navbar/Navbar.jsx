import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";
import "./Navbar.scss";
import newRequest from "../../utils/newRequest";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">Easp</span>
          </Link>
          <span className="dot">.</span>
        </div>
        {/* Hamburger */}
        <div className="hamburger" onClick={() => setNavMenuOpen(true)}>
          <FiMenu />
        </div>
        <div className={`links ${navMenuOpen ? "active" : ""}`}>
          <div className="close-menu" onClick={() => setNavMenuOpen(false)}>
            <FiX />
          </div>

          {!currentUser?.isSeller && (
            <Link className="link" to={"/gigs?all"}>
              Explore
            </Link>
          )}
          {!currentUser?.isSeller && (
            <Link to="/aboutUs" className="link">
              About Us
            </Link>
          )}
          {!currentUser?.isSeller && (
            <Link to={"/register"} className="link">
              Become a Seller
            </Link>
          )}
          {currentUser?.isSeller && (
            <>
              <Link className="link" to="/mygigs">
                Services
              </Link>
              <Link className="link" to="/add">
                Add New Service
              </Link>
              <Link className="link" to="/orders">
                Orders
              </Link>
              <Link className="link" to="/messages">
                Messages
              </Link>
            </>
          )}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Services
                      </Link>
                      <Link className="link" to="/add">
                        Add New Service
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">
                Sign in
              </Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr className="hr" />
          <div className="menu">
            <Link target="/" className="link menuLink" to="/gigs?cat=plumber">
              Plumber
            </Link>
            <Link
              target="/"
              className="link menuLink"
              to={`/gigs?cat=${encodeURIComponent("bike & mechanic")}`}
            >
              Bike & Car Mechanic
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
          <hr className="hr" />
        </>
      )}
    </div>
  );
}

export default Navbar;
