import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./Layout";

function Settings() {
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

    const [fullname, setfullname] = useState("");
    const [email, setemail] = useState("");
    const [country, setcountry] = useState("");
    const [state, setstate] = useState("");
    const [address, setaddress] = useState("");
    const [dob, setdob] = useState("");

    const updateDetails =(e)=>{
        e.preventDefault()

        const formdata = new FormData();
        formdata.append("userid", sessionStorage.getItem("userid"));
        formdata.append("fullname", fullname);
        formdata.append("email",email );
        formdata.append("country", country );
        formdata.append("state",state );
        formdata.append("address",address );
        formdata.append("dob",dob );
    
        axios({
          method: "POST",
          url:"https://api.biafinance.org/auth/updateDetails.php",
          data: formdata,
        })
          .then((res) => {
              notify(res.data.message)
          })
          .catch((err) => {
            notify(err.response.data.message);
          });

        return false
    }

  const userdetail = (e) => {
    const formdata = new FormData();
    formdata.append("userid", sessionStorage.getItem("userid"));

    axios({
      method: "POST",
      url: "https://api.biafinance.org/user/userdetails.php",
      data: formdata,
    })
      .then((res) => {
        let val = res.data.data
        setfullname(val.fullname);
        setemail(val.email)
        setcountry(val.country)
        setstate(val.state)
        setaddress(val.address)
        setdob(val.dob)
        
      })
      .catch((err) => {
        notify(err.response.data.message);
      });
  };

  useEffect(() => {
    userdetail();
  }, []);

  return (
    <div>
      <Layout>
        <h4 className="mx-5 my-4 text-blue">Edit Profile and Settings</h4>
        <div className="container">
          <div className="row">
            <div className="col-md-10  rounded pt-3 m-auto shadow">
              <h4 className="text-blue">Profile</h4>
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
              <form action="" className="form-group" onSubmit={updateDetails}>
                <div className="row pt-3">
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      name=""
                      id="user"
                      className="form-control form-control-lg bg-dark"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      name=""
                      id="full"
                      className="form-control form-control-lg bg-dark"
                      value={fullname}
                      onChange={e=> setfullname(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      name=""
                      id="email"
                      value={email}
                      onChange={e=> setemail(e.target.value)}
                      className="form-control form-control-lg bg-dark"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      name=""
                      id="country"
                      value={country}
                      onChange={e=> setcountry(e.target.value)}
                      className="form-control form-control-lg bg-dark"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      name=""
                      id="state"
                      value={state}
                      onChange={e=> setstate(e.target.value)}
                      className="form-control form-control-lg bg-dark"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      name=""
                      id="add"
                      value={address}
                      onChange={e=> setaddress(e.target.value)}
                      className="form-control form-control-lg bg-dark"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      name=""
                      id="dob"
                      value={dob}
                      onChange={e=> setdob(e.target.value)}
                      className="form-control form-control-lg bg-dark"
                    />
                  </div>
                  <div className="col-md-6 mb-4 mt-4">
                    <button
                      type="submit"
                      className="btn bg-blue btn-lg float-right"
                    >
                      <i className="fa fa-wrench"></i> Update Information
                    </button>
                  </div>
                </div>
              </form>
              <h4 className="my-3 text-blue">Security</h4>
               <form action="" className="form-group">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <input
                      type="password"
                      name=""
                      id="new"
                      placeholder="current password"
                      className="form-control form-control-lg bg-dark"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="password"
                      name=""
                      id="old"
                      placeholder="new password"
                      className="form-control form-control-lg bg-dark"
                    />
                  </div>
                  </div>
                    <button
                      type="submit"
                      className="btn bg-blue btn-lg float-right"
                    >
                      {" "}
                      <i className="fa fa-wrench"></i> Change Password
                    </button>
              </form>
              <br/>
              <br/>
              <br/>
              <form action="" className="form-group">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <input
                      type="password"
                      name=""
                      id="newpin"
                      placeholder="current pin"
                      className="form-control form-control-lg bg-dark"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="password"
                      name=""
                      id="oldpin"
                      placeholder="new pin"
                      className="form-control form-control-lg bg-dark"
                    />
                  </div>
                  </div>
                    <button
                      type="submit"
                      className="btn bg-blue btn-lg float-right"
                    >
                      {" "}
                      <i className="fa fa-wrench"></i> Change pin
                    </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Settings;
