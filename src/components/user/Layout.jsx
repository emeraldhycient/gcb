import React from 'react'

import './styles.css'
import logo from "../images/GCB-logo/vector/default-monochrome-white.svg"

import Sidebar from './Sidebar'


function Layout(props) {
    return (
        <>
            <div className="dash">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="dashcontainer" style={{backgroundColor:"#f7f5f8"}}>
                    <nav className="navbar navbar-expand-lg  shadow" style={{ backgroundColor: '#091018' }}>
                        <a className="navbar-brand" href="/">
                            <img src={logo} style={{ width: '200px', height: '35px' }} alt="Gcb logo" />
                        </a>
                    </nav>
                    <div className="pr-4 pl-4">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
