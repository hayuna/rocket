import React from 'react';
import {NavLink} from 'react-router-dom'
import '../styles/Navigation.scss'
const list = [
    {
        name: "Falcon 9",
        path: "/",
        exact: true
    },

    {
        name: "Starship",
        path: "/starship",
    },

    {
        name: "Electron",
        path: "/electron",
    },
]

const scrollUp = () => {
    window.scroll(0,0)
}


const Navigation = () => {

    const menu = list.map(item => (
        <li className="nav-item" key={item.name}>
            <NavLink  activeClassName="active"  to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))

 

    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-light">
            <h1 onClick={scrollUp} className="w-25 d-block">Rockets.com</h1>
            <ul className="nav navbar-nav w-75 h-100 align-items-center d-flex flex-row justify-content-around">
                {menu}
            </ul>
            
        </nav>
     );
}
 
export default Navigation;