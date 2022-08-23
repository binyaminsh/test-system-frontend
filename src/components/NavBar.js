import React from 'react';
import "../style/navBar.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <h1 className='header'><Link to={"/Account"}>Test</Link> </h1>
    )
}

export default NavBar