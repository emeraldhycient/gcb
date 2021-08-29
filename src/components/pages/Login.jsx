import React, { useState,useEffect } from "react";
import { Link,useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.css";

function Login() {
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

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const history = useHistory();

  const handlelogin = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);

    axios({
      method: "POST",
      url: "https://api.biafinance.org/auth/login.php",
      data: formdata,
    })
      .then((res) => {
        console.log(res);
        const data = res.data;
        sessionStorage.setItem("userid", data.data.userid);
        notify(data.message);
        if (res.data.data.isadmin) {
          sessionStorage.setItem("adminhash", data.data.hash);
          setTimeout(() => {
            history.push("/admin/dashboard/");
          }, 1000);
        } else {
          setTimeout(() => {
            history.push("/access-code");
          }, 1000);
        }
      })
      .catch((err) => {
       notify(err.response.data.message);
        console.log(err)
      });
    return false;
  };

  

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "10vh" }}>
        <div className="col-md-10 col-lg-10 col-sm-10 m-auto">
          <div className="row">
            <div
              className="col-md-6 p-5 m-auto shadow"
              style={{ fontFamily: "sans-serif" }}
            >
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
              <form className="form-group" id="login" onSubmit={handlelogin}>
                <h6 className="my-4 text-muted text-center">
                  Login to Account
                </h6>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  id=""
                  className="form-control mb-3 "
                />
                <div className="d-flex border pr-2 mb-3 justify-content-between align-items-center">
                  <input
                    type={passwordShown ? "text" : "password"}
                    placeholder="Enter password "
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    className="form-control no-border ml-2 mr-2"
                    style={{ fontFamily: "sans-serif" }}
                  />
                  <i
                    className={passwordShown ? "fa fa-eye-slash" : "fa fa-eye"}
                    onClick={togglePasswordVisiblity}
                  ></i>
                </div>
                <button className="btn bg-blue float-right col">login</button>
              </form>
              <br />
              <br />
              <br />
              <center>
                <Link to="/create" className="text-dark">
                  Create an Account
                </Link>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
