import React from "react"; 
import logo from './logo.png';
 
const Header = () => (
    <div className="header">
            <img src={logo} alt="" className="logo"></img>
            <ul className="menu">
                <li className="item-menu">Link 1</li>
                <li className="item-menu">Link 2</li>
                <li className="item-menu">Link 3</li>
                <li className="item-menu">Link 4</li>
                <li className="item-menu">Link 5</li>
            </ul>            
        </div>
)

export default Header;