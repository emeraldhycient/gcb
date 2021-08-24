import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.css"

function Signup() {
    const notify = (message) =>
    toast(`🦄 ${message}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    const history = useHistory();

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const [fullname, setfullname] = useState("");
    const [email, setemail] = useState("");
    const [country, setcountry] = useState("");
    const [state, setstate] = useState("");
    const [address, setaddress] = useState("");
    const [dob, setdob] = useState("");
    const [pin, setpin] = useState("");
    const [password, setpassword] = useState("");

    const createAccount =(e)=>{
        e.preventDefault()

        const formdata = new FormData();
        formdata.append("fullname", fullname);
        formdata.append("email",email );
        formdata.append("country", country );
        formdata.append("state",state );
        formdata.append("address",address );
        formdata.append("dob",dob );
        formdata.append("pin",pin );
        formdata.append("password",password );
        formdata.append("isadmin",'' );
        formdata.append("accountbalance","" );
    
        axios({
          method: "POST",
          url:"http://localhost/Bia%20finance/backend/auth/createaccount.php",
          data: formdata,
        })
          .then((res) => {
              notify(res.data.message)
              setTimeout(() => {
                history.push("/login");
              }, 1000);
          })
          .catch((err) => {
            notify(err.response.data.message);
          });

        return false
    }


    return (
        <div className="container">
            <div className="row" style={{ marginTop: '10vh', marginBottom: '50px' }}>
                <div className="col-md-10 col-lg-10 col-sm-10 m-auto">
                    <div className="row">
                    <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                        <div className="col-md-8 px-md-5 px-lg-5 px-sm-3 pb-5  shadow m-auto" style={{ fontFamily: 'sans-serif' }}>
                            <form action="" className="form-group" id="signup" onSubmit={createAccount}>
                                <h6 className="my-4 text-muted text-center" >Create an account</h6>
                                <input type="text" placeholder="Full Name" id="" value={fullname} onChange={e=> setfullname(e.target.value)} className="form-control mb-3 " />
                                <input type="email" placeholder="Email" id="" value={email} onChange={e=> setemail(e.target.value)} className="form-control mb-3 " />
                                <input type="text" placeholder="Address" id="" value={address} onChange={e=> setaddress(e.target.value)} className="form-control mb-3 " />
                                <input type="text" placeholder="State" id="" value={state} onChange={e=> setstate(e.target.value)} className="form-control mb-3 " />
                                <input type="text" placeholder="Country" id="" value={country} onChange={e=> setcountry(e.target.value)} className="form-control mb-3 " />
                                <label className="text-muted m-1">D.O.B</label>
                                <input type="date" placeholder="date of birth" id="" value={dob} onChange={e=> setdob(e.target.value)} className="form-control mb-3 " />
                                <input type="number" minLength="4" maxLength="4" value={pin} onChange={e=> setpin(e.target.value)} placeholder="Four Digit Pin" id="" className="form-control mb-3 " />
                                <div className="d-flex border pr-2 mb-3 justify-content-between align-items-center">
                                    <input type={passwordShown ? "text" : 'password'} value={password} onChange={e=> setpassword(e.target.value)} placeholder="Enter password " className="form-control no-border ml-2 mr-2" style={{ fontFamily: 'sans-serif' }} />
                                    <i className={passwordShown ? "fa fa-eye-slash" : "fa fa-eye"} onClick={togglePasswordVisiblity}></i>
                                </div>
                                <div className="d-flex border pr-2 mb-3 justify-content-between align-items-center">
                                    <input type={passwordShown ? "text" : 'password'} placeholder="confirm password " className="form-control no-border ml-2 mr-2" style={{ fontFamily: 'sans-serif' }} />
                                    <i className={passwordShown ? "fa fa-eye-slash" : "fa fa-eye"} onClick={togglePasswordVisiblity}></i>
                                </div>
                                <button type="submit" className="btn float-right col  bg-blue">Open Account</button>
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

export default Signup
