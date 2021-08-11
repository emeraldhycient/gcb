import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import Header from '../common/Header'
import Netbackground from './Netbackground'
import News from '../common/News'
import Footer from '../common/Footer'

function Cards() {
    let location = useLocation();

    return (
        <>
            <Netbackground>
                <Header />
                <br />
                <h1 className="text-white my-5 mx-5" style={{ fontWeight: 'bolder', textTransform: 'uppercase' }}>{location.pathname} </h1>
                <p className="mx-5 text-muted "><Link to="/" className="text-muted text-decoration-none">Home</Link> <i className="fa fa-forward text-info mx-3"></i>{location.pathname}</p>
            </Netbackground>
            <div className="col-md-6 h-100"></div>
            <News />
            <Footer />
        </>
    )
}

export default Cards
