import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./Layout";

import "./modalstyle.css";
import logo from "../images/biafinancebank-logo/vector/default-monochrome-black.svg";

function Transfer() {
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
      url: "https://api.biafinance.org/user/transfers.php",
      data: formdata,
    })
      .then((res) => {
        notify(res.data.message);
        setmessage(res.data.status);
        showmodal()
      })
      .catch((err) => {
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
        console.log(res);
      })
      .catch((err) => {
        notify(err.response.data.message);
        console.log(err.response.data);
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
		var result           = '';
		var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890987654321564738392910';
		var charactersLength = characters.length;
		for ( var i = 0; i < length; i++ ) {
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
                  ? "All local transfer attracts 0.5% charges"
                  : "All international transfer attracts 2% charges"}
              </h6>
            </div>
            <form className="form-group" onSubmit={handleTransfer}>
              {isotploading ? (
                <>
                  {" "}
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
                  <button
                    type="submit"
                    className="btn btn-primary mt-2 float-right"
                  >
                    <i className="fa fa-paper-plane"></i> Transfer
                  </button>
                </>
              ) : (
                <>
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
                      To Account::
                    </h5>
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      {receiveraccount}
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      Account Routine::
                    </h5>
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      {receiverrouting}
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      Account Holders Name::
                    </h5>
                    <h5
                      className="text-dark"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    >
                      {receivername}
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

export default Transfer;
