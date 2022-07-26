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
                {MenuItems.map((item,index) => {
                    return(
                        <li><a className="{items.cName}"></a></li>
                    )
              })}
               
            </ul>
        </nav>
      );
    }
       
};

export default Navbar;