import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./Layout";

function Transfer() {
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

  const [receiveraccount, setreceiveraccount] = useState("");
  const [receiverrouting, setreceiverrouting] = useState("");
  const [receivername, setreceivername] = useState("");
  const [amount, setamount] = useState("");
  const [pin, setpin] = useState("");
  const [otp, setotp] = useState("");

  const handleTransfer = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("userid", sessionStorage.getItem("userid"));
    formdata.append("email", sessionStorage.getItem("email"));
    formdata.append("accountnumber", receiveraccount);
    formdata.append("routing", receiverrouting);
    formdata.append("accountname", receivername);
    formdata.append("amount", amount);
    formdata.append("otp", otp);
    formdata.append("pin", pin);

    axios({
      method: "POST",
      url: "http://localhost/Bia%20finance/backend/user/transfers.php",
      data: formdata,
    })
      .then((res) => {
        notify(res.data.message);
      })
      .catch((err) => {
        notify(err.response.data.message);
      });
  };

  const requestOtp = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("userid", sessionStorage.getItem("userid"));
    formdata.append("email", sessionStorage.getItem("email"));

    axios({
      method: "POST",
      url: "http://localhost/Bia%20finance/backend/auth/requestOtp.php",
      data: formdata,
    })
      .then((res) => {
        console.log(res);
        notify(res.data.message);
      })
      .catch((err) => {
        notify(err.response.data.message);
      });
  };

  return (
    <div>
      <Layout>
        <div className="row">
          <div className="col-md-6 m-auto shadow">
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
            <form className="form-group" onSubmit={handleTransfer}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    #
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="account number"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={receiveraccount}
                  onChange={(e) => setreceiveraccount(e.target.value)}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    #
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="routing number"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={receiverrouting}
                  onChange={(e) => setreceiverrouting(e.target.value)}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Account Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={receivername}
                  onChange={(e) => setreceivername(e.target.value)}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="amount"
                  aria-label="Amount (to the nearest dollar)"
                  value={amount}
                  onChange={(e) => setamount(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    #
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="pin"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={pin}
                  onChange={(e) => setpin(e.target.value)}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    #
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="otp"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={otp}
                  onChange={(e) => setotp(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <button className="btn btn-sm bg-blue" onClick={requestOtp}>
                    get otp
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-2 float-right"
              >
                <i className="fa fa-paper-plane"></i> Transfer
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Transfer;
