import React from 'react'
import { Link } from 'react-router-dom'


import "./styles.css"
import logo from "../images/biafinancebank-logo/vector/default-monochrome-white.svg"

function Header() {
    return (
        <nav className="navbar navbar-expand-lg shadow">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars text-white" style={{ fontSize: 30 }}></i>
            </button>
            <a className="navbar-brand" href="/">
                <img src={logo} style={{ width: '200px', height: '35px' }} alt="bia finance bank logo" />
            </a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0 mr-2">
                   
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/services">SERVICES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/tracking">TRACKING</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/about">ABOUT</a>
                    </li> <li className="nav-item">
                        <a className="nav-link text-white" href="/contact">CONTACT</a>
                    </li> <li className="nav-item">
                        <a className="nav-link text-white" href="/cards">CARDS</a>
                    </li>
                </ul>
                <div className="my-2 my-lg-0 mr-3">
                    <button className="btn dashboard my-2 my-sm-0"><Link to="/login" className="text-decoration-none text-white">Account</Link></button>
                </div>
            </div>
        </nav>
    )
}

export default Header
