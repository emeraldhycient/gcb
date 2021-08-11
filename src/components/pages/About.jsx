import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import Header from '../common/Header'
import Netbackground from './Netbackground'
import Map from './map/Map'
import News from '../common/News'
import Footer from '../common/Footer'

function About() {
    let location = useLocation();

    return (
        <>
            <Netbackground>
                <Header />
                <br />
                <h1 className="text-white my-5 mx-5" style={{ fontWeight: 'bolder', textTransform: 'uppercase' }}>{location.pathname} </h1>
                <p className="mx-5 text-muted "><Link to="/" className="text-muted text-decoration-none">Home</Link> <i className="fa fa-forward text-info mx-3"></i>{location.pathname}</p>
            </Netbackground>
            <section className="" style={{ marginTop: '100px', marginBottom: '30px', color: '#23153c' }}>
                <center>
                    <h1 className="text-center text-uppercase">About Us</h1>
                    <div className="m-4 shortbar"></div>
                </center>
                <br />
                <br />
                <div className="container mt-5">
                    <div className="row" style={{ fontFamily: 'sans-serif' }}>
                        <div className="col-md-5 mb-5">
                            <Map />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6 col-lg-6 col-sm-8">
                            <div className="my-5">
                                <h5>
                                    BIAFINANCE BANK is the leading financial establishment providing high-quality international banking services. Our success is attributed to our loyal customers and to the talent and dedication of our professional and skilled employees. We are always ready to partner with you by offering full financial support to our clients worldwide.
                                </h5>
                                <small className="text-muted">We provide all our clients with various advantages that not only satisfy their banking needs but also allow them to get more without overpaying for banking service.</small>
                            </div>
                            <div className="bg-dark p-2">
                                <h6 className="text-light mb-2"><i className="fa fa-home bg-light text-dark rounded p-2 mr-2"></i>7 Bis Avenue de la Paix 1202 Geneva, Switzerland</h6>
                                <h6><i className="fa fa-envelope text-danger bg-light rounded p-2 mr-2"></i><a href="mailto:Contact@biafinancebank.com" className="text-light"> Contact@biafinancebank.com</a></h6>
                                <h6><i className="fa fa-envelope text-danger bg-light rounded p-2 mr-2"></i><a href="mailto:info@biafinancebank.com" className="text-light"> info@biafinancebank.com</a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            <News />
            <Footer />
        </>
    )
}

export default About
