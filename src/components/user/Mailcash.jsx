import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./Layout";
import "./modalstyle.css";
import logo from "../images/biafinancebank-logo/vector/default-monochrome-black.svg";

function Mailcash() {
  const { transfertype } = useParams();

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

  const [message, setmessage] = useState("");

  const [address, setaddress] = useState("");
  const [zipcode, setzipcode] = useState("");
  const [amount, setamount] = useState("");
  const [pin, setpin] = useState("");
  const [otp, setotp] = useState("");

  const handleCashMailing = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("userid", sessionStorage.getItem("userid"));
    formdata.append("email", sessionStorage.getItem("email"));
    formdata.append("address", address);
    formdata.append("zipcode", zipcode);
    formdata.append("amount", amount);
    formdata.append("otp", otp);
    formdata.append("pin", pin);

    axios({
      method: "POST",
      url: "https://api.biafinance.org/user/cashmailing.php",
      data: formdata,
    })
      .then((res) => {
        notify(res.data.message);
        setmessage(res.data.status);
        showmodal();
      })
      .catch((err) => {
        notify(err.response.data.message);
        notify(err.response.data.message);
        setmessage(err.response.data.status);
      });
  };

  const requestOtp = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("userid", sessionStorage.getItem("userid"));
    formdata.append("email", sessionStorage.getItem("email"));

    axios({
      method: "POST",
      url: "https://api.biafinance.org/auth/requestOtp.php",
      data: formdata,
    })
      .then((res) => {
        notify(res.data.message);
      })
      .catch((err) => {
        notify(err.response.data.message);
      });
  };

  const [isotploading, setisotploading] = useState(false);

  const toggleload = () => {
    setisotploading((prev) => !prev);
  };

  const closebtn = document.querySelector(".close");
  const modal = document.querySelector(".modal");

  const closemodal = () => {
    closebtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  };

  const showmodal = () => {
    modal.style.display = "block";
  };

  function randomString(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890987654321564738392910";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

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

            <div className="text-center py-2">
              <h6 className="text-warning">
                {transfertype === "local"
                  ? "All local cash mailing attracts 0.5% charges"
                  : "All international cash mailing attracts 2% charges"}
              </h6>
            </div>
            <form action="" className="form-group" onSubmit={handleCashMailing}>
              {isotploading ? (
                <>
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
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary mt-2 float-right"
                  >
                    <i className="fa fa-paper-plane"></i> Mail
                  </button>
                </>
              ) : (
                <>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        <i className="fa fa-home"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="address"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={address}
                      onChange={(e) => setaddress(e.target.value)}
                      required
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        <i className="fa fa-home"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Zip code"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={zipcode}
                      onChange={(e) => setzipcode(e.target.value)}
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
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
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

                  <button
                    className="btn btn-primary mt-2 float-right"
                    onClick={(e) => {
                      requestOtp(e);
                      toggleload();
                    }}
                  >
                    get otp
                  </button>
                </>
              )}
            </form>
            <div id="myModal" className="modal">
              <div className="modal-content">
                <span className="close" onClick={(e) => closemodal()}>
                  &times;
                </span>
                <div className="">
                  <img
                    src={logo}
                    style={{ height: "130px", width: "130px" }}
                    alt=""
                    className="p-0 m-0"
                  />
                  <h5
                    className="text-danger mb-3"
                    style={{ fontWeight: "bold" }}
                  >
                    InterBank Transfer
                  </h5>
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="text-dark" style={{ fontWeight: "bold" }}>
                      Status ::
                    </h5>
                    <h5 className="text-success" style={{ fontWeight: "bold" }}>
                      {message}
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      Reference Number ::
                    </h5>
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      Bia-{randomString(16)}
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      Transaction date ::
                    </h5>
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      {new Date().toLocaleString().replace(",", "")}
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      Amount::
                    </h5>
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      USD {amount ? amount : "0.00"}
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      To Address::
                    </h5>
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      {address}
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      Area Zip::
                    </h5>
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      {zipcode}
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      Senders Email::
                    </h5>
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      {sessionStorage.getItem("email")}
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      Transaction Type::
                    </h5>
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      {transfertype === "local"
                        ? " Local transfer "
                        : "International transfer "}
                    </h5>
                  </div>
                  <div className="mt-5">
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      Note::This receipt is computer generated and no signature
                      is required
                    </h5>
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      HEADQUARTER : The World Bank,1818 H Street,NW
                      Washington,Dc 20433 USA
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Mailcash;
