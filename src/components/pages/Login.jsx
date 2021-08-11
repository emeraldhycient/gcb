import React, { useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'

import "./styles.css"
import logo from '../images/biafinancebank-logo/cover.png'

function Login() {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const history = useHistory

    const handlelogin = () => {
        history.push('/access-code')
    }

    return (
        <div className="container">
            <div className="row" style={{ marginTop: '10vh' }}>
                <div className="col-md-10 col-lg-10 col-sm-10 m-auto">
                    <div className="row">
                        <div className="col-md-6 mr-0 p-0" id="logopane">
                            <img src={logo} alt="" width="100%" height="500px" className="rounded" />
                        </div>
                        <div className="col-md-6 p-5 ml-0 shadow" style={{ fontFamily: 'sans-serif' }}>
                            <form className="form-group" id="login">
                                <h6 className="my-4 text-muted text-center" >Login to Account</h6>
                                <input type="email" placeholder="Enter Email" id="" className="form-control mb-3 " />
                                <div className="d-flex border pr-2 mb-3 justify-content-between align-items-center">
                                    <input type={passwordShown ? "text" : 'password'} placeholder="Enter password " className="form-control no-border ml-2 mr-2" style={{ fontFamily: 'sans-serif' }} />
                                    <i className={passwordShown ? "fa fa-eye-slash" : "fa fa-eye"} onClick={togglePasswordVisiblity}></i>
                                </div>
                                <button onClick={handlelogin} className="btn btn-success float-right col">login</button>
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

export default Login
