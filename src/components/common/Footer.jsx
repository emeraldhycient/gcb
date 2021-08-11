import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {

    const d = new Date()
    const y = d.getFullYear()

    return (
        <div style={{ paddingTop: '200px' }}>
            <div className="d-flex align-content-center justify-content-center">
                <div className="newsletter shadow pt-5">
                    <center>
                        <h4 className="mb-4"> Subscribe for News and Updates</h4>
                        <form action="" className="form-group">
                            <div className="container">
                                <div className="col-md-8 text-center">
                                    <div className="d-flex border pl-4 pt-2 py-2 pr-2 justify-content-between align-items-center">
                                        <i className="fa fa-envelope"></i>
                                        <input type="text" placeholder="Enter Email " className="form-control no-border ml-2" style={{ fontFamily: 'sans-serif' }} />
                                        <button className="btn btn-dark btn-lg" id="sub">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </center>
                </div>
            </div>
            <div className="bg-dark footer" style={{ paddingTop: '230px', height: 'fit-content' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <h2 className="text-white mb-5">RESOURCES</h2>
                            <p style={{ fontFamily: 'sans-serif' }}><Link to="/" className="text-decoration-none text-white">HOME</Link></p>
                            <p style={{ fontFamily: 'sans-serif' }}><Link to="/" className="text-decoration-none text-white">SERVICES</Link></p>
                            <p style={{ fontFamily: 'sans-serif' }}><Link to="/" className="text-decoration-none text-white">ABOUT</Link></p>
                            <p style={{ fontFamily: 'sans-serif' }}><Link to="/" className="text-decoration-none text-white">CONTACT</Link></p>
                            <p style={{ fontFamily: 'sans-serif' }}><Link to="/" className="text-decoration-none text-white">CARDS</Link></p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h3 className="text-white">Get In Contact </h3>
                            <form action="" className="form-group mt-5 bg-light p-3" style={{ fontFamily: 'sans-serif' }}>
                                <input type="text" placeholder="Name.." className="form-control mb-2" />
                                <input type="email" placeholder="Email..." className="form-control mb-2" />
                                <textarea name="" id="" cols="30" rows="5" className="form-control"></textarea>
                                <button type="submit" className="btn btn-dark mt-2 btn-lg">Send</button>
                            </form>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-3 mb-4">
                            <h3 className="text-white">Social Links</h3>
                            <div className="mt-md-5 mt-lg-5 mt-sm-2 mt-xs-2 mx-auto">
                                <i className="fa fa-envelope text-muted fa-2x mr-2"></i>
                                <i className="fa fa-whatsapp text-muted fa-2x mr-2"></i>
                                <i className="fa fa-twitter text-muted fa-2x mr-2"></i>
                                <i className="fa fa-instagram text-muted fa-2x mr-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light mt-3 offset-2 mb-2">
                <i className="fa fa-copyright text-muted mr-2"></i>
                <span className="text-muted" style={{ fontFamily: 'sans-serif' }}>biafinancebank {y}</span>
            </div>
        </div>
    )
}

export default Footer
