import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import Header from '../common/Header'
import Netbackground from './Netbackground'
import News from '../common/News'
import Footer from '../common/Footer'

function Services() {
    let location = useLocation();

    return (
        <>
            <Netbackground>
                <Header />
                <br />
                <h1 className="text-white my-5 mx-5" style={{ fontWeight: 'bolder', textTransform: 'uppercase' }}>{location.pathname} </h1>
                <p className="mx-5 text-muted "><Link to="/" className="text-muted text-decoration-none">Home</Link> <i className="fa fa-forward text-info mx-3"></i>{location.pathname}</p>
            </Netbackground>
            <section className="" style={{ marginTop: '100px', marginBottom: '100px', color: '#23153c' }}>
                <center>
                    <h1 className="text-center text-uppercase">our services</h1>
                    <div className="m-4 shortbar"></div>
                </center>
                <div className="container mt-5">
                    <div className="row" style={{ fontFamily: 'sans-serif' }}>
                        <div className="col-md-4 mb-5">
                            <div className="d-flex justify-content-around">
                                <div className=" mr-3">
                                    <i className="fa fa-database fa-3x"></i>
                                </div>
                                <div className="">
                                    <h4>Savings Account</h4>
                                    <p className="my-3 text-muted">We offer savings account for saving funds you don't need immediately but is withdrawalable at any point in time.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-5">
                            <div className="d-flex justify-content-around">
                                <div className=" mr-3">
                                    <i className="fa fa-clipboard fa-3x"></i>
                                </div>
                                <div className="">
                                    <h4>Checking Account</h4>
                                    <p className="my-3 text-muted">A checking account is a type of bank account that allows you to easily deposit and withdraw money for daily transactions.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-5">
                            <div className="d-flex justify-content-around">
                                <div className=" mr-3">
                                    <i className="fa fa-university fa-3x"></i>
                                </div>
                                <div className="">
                                    <h4>Pension Savings</h4>
                                    <p className="my-3 text-muted">Pension account is a dedicated account designed for long time usage to save for retirement.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-5">
                            <div className="d-flex justify-content-between">
                                <div className=" mr-3">
                                    <i className="fa fa-credit-card fa-3x"></i>
                                </div>
                                <div className="">
                                    <h4>Credit / Debit card</h4>
                                    <p className="my-3 text-muted">Enjoy unlimited cash back, travel rewards, or balance transfer savings with our cards.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-5">
                            <div className="d-flex justify-content-around">
                                <div className=" mr-4">
                                    <i className="fa fa-bolt fa-3x"></i>
                                </div>
                                <div className="">
                                    <h4>Fast Loans</h4>
                                    <p className="my-3 text-muted">Request for loans and have it reviewed and approved in less than hour, no need for collaterals.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-5">
                            <div className="d-flex justify-content-around">
                                <div className=" mr-3">
                                    <i className="fa fa-users fa-3x"></i>
                                </div>
                                <div className="">
                                    <h4>Fund Management</h4>
                                    <p className="my-3 text-muted">Are you an artist, an athelete or just want your fund managed by pros. we are available at your service.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <News />
            <Footer />
        </>
    )
}

export default Services
