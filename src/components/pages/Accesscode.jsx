import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./styles.css"
import logo from '../images/biafinancebank-logo/cover.png'

function Accesscode() {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <div className="container">
            <div className="row" style={{ marginTop: '10vh' }}>
                <div className="col-md-10 col-lg-10 col-sm-10 m-auto">
                    <div className="row">
                        <div className="col-md-6 mr-0 p-0" id="logopane">
                            <img src={logo} alt="" width="100%" height="500px" className="rounded" />
                        </div>
                        <div className="col-md-6 p-5 ml-0 shadow" style={{ fontFamily: 'sans-serif' }}>
                            <form action="/user/dashboard/" method="post" className="form-group" id="login">
                                <h6 className="my-4 text-muted text-center" >Enter Your Access Code</h6>
                                <div className="d-flex border pr-2 mb-3 justify-content-between align-items-center">
                                    <input type={passwordShown ? "text" : 'password'} placeholder="Enter your pin " className="form-control no-border ml-2 mr-2" style={{ fontFamily: 'sans-serif' }} />
                                    <i className={passwordShown ? "fa fa-eye-slash" : "fa fa-eye"} onClick={togglePasswordVisiblity}></i>
                                </div>
                                <button type="submit" className="btn btn-success float-right col">Enter</button>
                            </form>
                            <br />
                            <br />
                            <br />
                            <center>
                                <Link to="/create" className="text-dark">Create an Account</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accesscode
