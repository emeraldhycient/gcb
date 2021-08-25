import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.css";

function Accesscode() {
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

  const [pin, setpin] = useState("");

  const history = useHistory();

  const handlelogin = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("userid", sessionStorage.getItem("userid"));
    formdata.append("pin", pin);

    axios({
      method: "POST",
      url: "http://localhost/Bia%20finance/backend/auth/verifycode.php",
      data: formdata,
    })
      .then((res) => {
        if (res.data.status == "success") {
          const data = res.data;
          notify(data.message);
          sessionStorage.setItem("userhash", data.data.hash);
          sessionStorage.setItem("email", data.data.user.email);
          setTimeout(() => {
            history.push("/user/dashboard/");
          }, 1000);
        } else {
          notify(res.data.message);
        }
      })
      .catch((err) => {
        notify(err.response.data.message);
      });
    return false;
  };

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "10vh" }}>
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
            <div
              className="col-md-6 p-5 ml-0 shadow m-auto"
              style={{ fontFamily: "sans-serif" }}
            >
              <form onSubmit={handlelogin}>
                <h6 className="my-4 text-muted text-center">
                  Enter Your Access Code
                </h6>
                <div className="d-flex border pr-2 mb-3 justify-content-between align-items-center">
                  <input
                    type={passwordShown ? "text" : "password"}
                    placeholder="Enter your pin "
                    className="form-control no-border ml-2 mr-2"
                    style={{ fontFamily: "sans-serif" }}
                    onChange={(e) => setpin(e.target.value)}
                  />
                  <i
                    className={passwordShown ? "fa fa-eye-slash" : "fa fa-eye"}
                    onClick={togglePasswordVisiblity}
                  ></i>
                </div>
                <button type="submit" className="btn bg-blue float-right col">
                  Enter
                </button>
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

export default Accesscode;
