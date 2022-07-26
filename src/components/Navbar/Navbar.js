import React, { Component } from "react";
import './app.css';
import {MenuItems} from "./MenuItems";

class Navbar extends Component {
    render() {
      return(
        <nav className="NavBarItem">
            <h1 className="Navbar-logo">React</h1>
            <div className="menu-icon">
               
            </div>
            <ul>
                <li><a href=""></a></li>
            </ul>
        </nav>
      );
    }
       
};

export default Navbar;