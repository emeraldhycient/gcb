import React from 'react'
import { Link } from 'react-router-dom'


import Header from "./common/Header";
import Footer from './common/Footer';
import News from './common/News';
import Herosection from "./common/Herosection";
import downloadimage from "./images/undraw_drag_5i9w.svg"
import downloadandroid from "./images/downloadandroid.png"
import downloadiphone from "./images/downloadiphone.png"
import Netbackground from "./common/Netbackground"


function Index() {

    return (
        <>
            <Herosection>
                <Header />
                <section className="" style={{ marginTop: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="container text-white m-sm-0 m-xs-0">
                        <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12 mr-auto ml-md-5 ml-lg-5 ml-sm-4">
                            <h1 className="my-4" style={{ fontWeight: 'bolder' }}>THE FASTEST ONLINE BANKING FOR YOUR DAILY NEEDS.</h1>
                            <p style={{ letterSpacing: "0.7px", fontFamily: 'Palatino Linotype', lineHeight: '30px' }}>Bia finance bank is your goto partner for your next movie ticket,groceries,travel or that holiday you have always wanted.shop freely and get 2% cashback on every expenses.</p>
                            <div className="mt-5">
                                <button className="btn btn-success btn-lg"><Link to="/create" style={{ textDecoration: 'none', color: '#fafafa' }}>CREATE AN ACCOUNT</Link></button>
                            </div>
                        </div>
                    </div>
                </section>
            </Herosection>
            <section className="pb-4 mt-0" style={{ paddingTop: '230px', marginBottom: '200px', backgroundColor: '#23153c' }}>
                <center>
                    <h2 className="h2">EASY STEPS TO GET STARTED</h2>
                    <div className="m-4 shortbar"></div>
                    <div className="col-md-6">
                        <h6 className="p" style={{ marginBottom: '70px' }}>Following these simple steps highlighted below guaranties you would enjoy banking with us. if at any stage you need assistance , our support team will be more than happy to help.</h6>
                    </div>
                </center>
                <div className="container mx-auto">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="circle">
                                <img src="https://img.icons8.com/fluent/48/000000/euro-bank-building.png" alt=" create account icon" />
                            </div>
                            <h5 className="my-3 text-white">CREATE AN ACCOUNT</h5>
                            <h6 className="mb-4 p">Scroll down and locate the create an account button. click on it and it would take you to the page where you can create your account. accounts such personal savings account,Fixed deposit account etc..</h6>
                        </div>
                        <div className="col-md-4">
                            <div className="circle">
                                <img src="https://img.icons8.com/fluent/48/000000/bank-cards.png" alt="request for an atm card icon " />
                            </div>
                            <h5 className="my-3 text-white">REQUEST FOR AN ATM CARD</h5>
                            <h6 className="p mb-4">After Your Account has been created you would be directed to your account page.Locate this icon <i className="fa fa-credit-card text-success"></i>, Click on it and you would see a button that enables you to request for your credit card.</h6>
                        </div>
                        <div className="col-md-4">
                            <div className="circle">
                                <img src="https://img.icons8.com/fluent/48/000000/request-money.png" alt="deposit money into your account icon " />
                            </div>
                            <h5 className="my-3 text-white">FUND YOUR ACCOUNT</h5>
                            <h6 className="p mb-4 ">We Have Several Options which enables you to fund and spend from your account,methods like direct cryptocurrency  <i className="fa fa-bitcoin text-warning"></i> deposit to your dedicated cryptocurrency wallet address.</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="" style={{ marginTop: '230px', marginBottom: '200px' }}>
                <center>
                    <h2 className="h2 text-dark"> ADVANTAGES OF BANKING WITH US</h2>
                    <div className="m-4 shortbar"></div>
                </center><br /><br />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <center>
                                <img src="https://img.icons8.com/fluent/48/000000/investment-portfolio.png" width="50px" height="50px" alt="" />
                                <h5 className="my-3">DETAILED STATISTICS</h5>
                                <h6 className="mb-4 p text-muted">Our online banking resource provides free & detailed statistics to all biafinance user transactions both local and international transactions.</h6>
                            </center>
                        </div>
                        <div className="col-md-4">
                            <center>
                                <img src="https://img.icons8.com/fluent/48/000000/stack-of-coins.png" alt="" />
                                <h5 className="my-3">CASH BACK UPTO <span className="text-success">20%</span></h5>
                                <h6 className="p mb-4 text-muted">Going to the supermarket shop with our credit card , going to the movies pay with our card , planning for your next big travel pay with our card and get cash back on every transactions you do upto 20% in cashback weekly.</h6>
                            </center>
                        </div>
                        <div className="col-md-4">
                            <center>
                                <img src="https://img.icons8.com/fluent/48/000000/online-money-transfer.png" alt="" />
                                <h5 className="my-3"><span className="text-primary">10</span> FREE INTERNATIONAL TRANSFER</h5>
                                <h6 className="p mb-4 text-muted">We Have Several Options which enables you to fund or transfer from your account to an international  client of yours.we offer upto 10 free transactions on all international money transfer.</h6>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <button className="btn btn-primary btn-lg"><Link to="/create" style={{ textDecoration: 'none', color: '#fafafa' }}>OPEN AN ACCOUNT</Link></button>
                </div>
            </section>
            <Netbackground>
                <div className="text-center pt-3 mt-3">
                    <h2 className="h2 text-white my-5">FEW STATISTICS ABOUT US</h2>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 col-sm-6 m-auto pb-5">
                            <div class="progress blue">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value">90%</div>
                            </div>
                            <h2 className="text-white mt-5 text-center"><b className="text-primary" style={{ fontFamily: "impact" }}>90%</b> of our customers leave postive reviews after banking for the first time</h2>
                        </div>

                        <div class="col-md-5 col-sm-6 m-auto pb-5">
                            <div class="progress yellow">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value">75%</div>
                            </div>
                            <h2 className="text-white mt-5 text-center"><b className="text-warning" style={{ fontFamily: "impact" }}>75%</b> of the first time customer reviewers continued using our servivces.</h2>
                        </div>
                    </div>
                </div>
            </Netbackground>
            <section className="" style={{ marginTop: '230px', marginBottom: '200px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-5">
                            <img src={downloadimage} alt="" style={{ width: '100%' }} />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-7">
                            <h1 className="" style={{ fontWeight: 'bolder', textTransform: 'capitalize', color: '#23153c' }}>Download Our Software, Compatible For All Devices.</h1>
                            <h6 className="p my-5 text-muted" >Make your life experiences simpler and stay in control with Our Mobile Banking app. Manage your finances; make card settlements, transfer funds and make payments using QR (Quick Response codes).</h6>
                            <div className="d-flex justify-content-around">
                                <img src={downloadiphone} alt="" id="appstore" /><img src={downloadandroid} alt="" id="appstore" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Netbackground>
                <div className="container pt-5">
                    <div className="row pt-5 mb-3">
                        <div className="col-md-4 mt-5 pt-5 text-center">
                            <h2 className="h2 text-white">Customers</h2>
                            <center>
                                <div className="m-4 shortbar"></div>
                            </center>
                            <h1 className="mt-5"><b className="text-light" style={{ fontFamily: "impact" }}>17,528,127</b></h1>
                        </div>
                        <div className="col-md-4 mt-5 pt-5 text-center">
                            <h2 className="h2 text-white">Transactions</h2>
                            <center>
                                <div className="m-4 shortbar"></div>
                            </center>
                            <h1 className="mt-5"><b className="text-light" style={{ fontFamily: "impact" }}>17,000,528,127</b></h1>
                        </div>
                        <div className="col-md-4 mt-5 pt-5 text-center">
                            <h3 className="h2 text-white">In Holding</h3>
                            <center>
                                <div className="m-4 shortbar"></div>
                            </center>
                            <h1 className="mt-5"><b className="text-light" style={{ fontFamily: "impact" }}>4,010,428,527</b></h1>
                        </div>
                    </div>
                    <div className="mt-5 text-center pt-3">
                        <button className="btn btn-primary btn-lg"><Link to="/create" style={{ textDecoration: 'none', color: '#fafafa' }}>BANK WITH US NOW</Link></button>
                    </div>
                </div>
            </Netbackground>
            <News />
            <Footer />
        </>
    )
}

export default Index
