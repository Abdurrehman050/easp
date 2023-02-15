import React, { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  state = { clicked: false };
  hanldeClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <React.Fragment>
        <nav className="Navbaritems">
          <h1 className="navbar-logo">Easp.</h1>
          <div className="menu-icons" onClick={this.hanldeClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url} className={item.cName}>
                    <i className={item.icon}></i>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <button>Register</button>
          <button>Login</button>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
