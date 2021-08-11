import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./styles.css"
import logo from '../images/biafinancebank-logo/cover.png'

function Login() {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <div className="container">
            <div className="row" style={{ marginTop: '10vh', marginBottom: '50px' }}>
                <div className="col-md-10 col-lg-10 col-sm-10 m-auto">
                    <div className="row">
                        <div className="col-md-6 p-0  shadow" id="logopane">
                            <img src={logo} alt="" width="100%" height="500px" className="rounded" />
                        </div>
                        <div className="col-md-6 px-md-5 px-lg-5 px-sm-3 pb-5  shadow" style={{ fontFamily: 'sans-serif' }}>
                            <form action="" className="form-group" id="signup">
                                <h6 className="my-4 text-muted text-center" >Create an account</h6>
                                <input type="text" placeholder="Full Name" id="" className="form-control mb-3 " />
                                <input type="email" placeholder="Email" id="" className="form-control mb-3 " />
                                <input type="text" placeholder="Address" id="" className="form-control mb-3 " />
                                <input type="text" placeholder="State" id="" className="form-control mb-3 " />
                                <input type="text" placeholder="Country" id="" className="form-control mb-3 " />
                                <label className="text-muted m-1">D.O.B</label>
                                <input type="date" placeholder="date of birth" id="" className="form-control mb-3 " />
                                <input type="number" minLength="4" maxLength="4" placeholder="Four Digit Pin" id="" className="form-control mb-3 " />
                                <div className="d-flex border pr-2 mb-3 justify-content-between align-items-center">
                                    <input type={passwordShown ? "text" : 'password'} placeholder="Enter password " className="form-control no-border ml-2 mr-2" style={{ fontFamily: 'sans-serif' }} />
                                    <i className={passwordShown ? "fa fa-eye-slash" : "fa fa-eye"} onClick={togglePasswordVisiblity}></i>
                                </div>
                                <div className="d-flex border pr-2 mb-3 justify-content-between align-items-center">
                                    <input type={passwordShown ? "text" : 'password'} placeholder="confirm password " className="form-control no-border ml-2 mr-2" style={{ fontFamily: 'sans-serif' }} />
                                    <i className={passwordShown ? "fa fa-eye-slash" : "fa fa-eye"} onClick={togglePasswordVisiblity}></i>
                                </div>
                                <button type="submit" className="btn btn-success float-right col">Open Account</button>
                            </form>
                            <br />
                            <br />
                            <br />
                            <center>
                                <Link to="/login" className="text-dark">Login to Account</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
