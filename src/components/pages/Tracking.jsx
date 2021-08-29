import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../common/Header";
import bike from "../images/sammy-delivery.png";
import News from "../common/News";
import Footer from "../common/Footer";

function Tracking() {
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

  const [tracking, settracking] = useState("");
  const [mail, setmail] = useState("");

  const handleTracking = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("tracking", tracking);
    axios
      .post("https://api.biafinance.org/user/tracking.php", formdata)
      .then((res) => {
        if (res.data.status === "success") {
          console.log(res);
          notify(res.data.message);
          setmail(res.data.data);
        }
      })
      .catch((err) => {
        notify(err.response.data.message);
      });
  };

  return (
    <>
      <Header />
      <div className="hero">
        <div className="blured">
          <div className="container">
            <div className="row">
              <div
                className="col-md-7 herolarge"
                style={{ paddingTop: "140px", fontFamily: "nunito" }}
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
                <h2 className="text-info mb-0 pb-0 h">Moving money,</h2>
                <h1 className="text-blue mb-4 pt-0 mt-0 h">The easier way.</h1>
                <h6 className="text-light mb-5 hideit wow bounceInUp">
                  follow your money across the globe from the comfort of your
                  home,you don't have to stand up from your computer.{" "}
                </h6>
                <form action="" onSubmit={handleTracking}>
                  <div className="d-flex bordered rounded py-2 pr-2 justify-content-between align-items-center bg-light">
                    <input
                      type="text"
                      placeholder="Enter Your Tracking"
                      className="form-control no-border"
                      value={tracking}
                      onChange={(e) => settracking(e.target.value)}
                      style={{ fontFamily: "sans-serif", width: "70%" }}
                    />
                    <button className="btn btn-warning  text-blue">
                      track Parcel
                    </button>
                  </div>
                </form>
              </div>
              <div
                className="col-md-5 pl-5 herosmall wow bounceInUp"
                style={{ paddingTop: "100px" }}
              >
                <img
                  src={bike}
                  alt=""
                  height="200px"
                  width="400px"
                  className="wow slideInLeft"
                />
              </div>
            </div>

            <div className="row" style={{ marginBottom: "100px" }}>
              {
                mail ? 

                <div className="col-md-6 m-auto py-2 bg-light wow slideInLeft" >
                <h3
                  className="text-dark mb-3 mt-3 ml-3"
                  style={{ fontWeight: "bolder" }}
                >
                  Your Order
                </h3>
                <div className="d-flex justify-content-between mb-3 ml-3">
                  <div className="">
                    <h6 className="text-blue">Order {mail.statuz}</h6>
                    <h6>
                      <small>Tracking id : {mail.tracking}</small>
                    </h6>
                  </div>
                  <div className="">
                    <h6>Order Date :</h6>
                    <h6>
                      <small className="text-blue">{mail.createdAt}</small>
                    </h6>
                  </div>
                </div>
                <h6 className="text-dark mb-3 mt-3 ml-3">
                  {mail.addresses}
                </h6>
                <div className="container">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="lines-container">
                      <div className="lines bg-blue"></div>
                      <div className="circled shadow2 bg-blue"></div>
                      <div className="lines bg-blue"></div>
                    </div>
                    <div className="text-dark">
                     Order received and is being processed now .
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="lines-container">
                    <div className={mail.detail1 ? "lines bg-blue" : "lines"}></div>
                      <div className={mail.detail1 ? "circled shadow2 bg-blue" : "circled shadow2"}></div>
                      <div className={mail.detail1 ? "lines bg-blue" : "lines"}></div>
                    </div>
                    <div className="text-dark">
                     {mail.detail1}
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="lines-container">
                    <div className={mail.detail2 ? "lines bg-blue" : "lines"}></div>
                      <div className={mail.detail2 ? "circled shadow2 bg-blue" : "circled shadow2"}></div>
                      <div className={mail.detail2 ? "lines bg-blue" : "lines"}></div>
                    </div>
                    <div className="text-dark">
                     {mail.detail2}
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="lines-container">
                    <div className={mail.detail3 ? "lines bg-blue" : "lines"}></div>
                      <div className={mail.detail3 ? "circled shadow2 bg-blue" : "circled shadow2"}></div>
                      <div className={mail.detail3 ? "lines bg-blue" : "lines"}></div>
                    </div>
                    <div className="text-dark">
                     {mail.detail3}
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="lines-container">
                    <div className={mail.detail4 ? "lines bg-blue" : "lines"}></div>
                      <div className={mail.detail4 ? "circled shadow2 bg-blue" : "circled shadow2"}></div>
                      <div className={mail.detail4 ? "lines bg-blue" : "lines"}></div>
                    </div>
                    <div className="text-dark">
                     {mail.detail4}
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="lines-container">
                    <div className={mail.detail5 ? "lines bg-blue" : "lines"}></div>
                      <div className={mail.detail5 ? "circled shadow2 bg-blue" : "circled shadow2"}></div>
                      <div className={mail.detail5 ? "lines bg-blue" : "lines"}></div>
                    </div>
                    <div className="text-dark">
                     {mail.detail5}
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="lines-container">
                    <div className={mail.detail6 ? "lines bg-blue" : "lines"}></div>
                      <div className={mail.detail6 ? "circled shadow2 bg-blue" : "circled shadow2"}></div>
                      <div className={mail.detail6 ? "lines bg-blue" : "lines"}></div>
                    </div>
                    <div className="text-dark">
                     {mail.detail6}
                    </div>
                  </div>

                  
                 
                </div>

                <h6 className="text-dark mb-3 mt-3 ml-3">
                  {mail.locations}
                </h6>

                <div className="mt-3">
                  <h5 className="text-dark ml-3 mb-2">Receipt Details</h5>
                  <div className="d-flex justify-content-between mb-3 ml-3">
                    <h6>
                      <small>Delivery Charges</small>
                    </h6>
                    <h6>
                      <small className="text-blue">2%</small>
                    </h6>
                  </div>

                  <div className="d-flex justify-content-between mb-3 ml-3">
                    <h6>
                      <small>Amount Payable</small>
                    </h6>
                    <h6>
                      <small className="text-blue">${mail.amount}</small>
                    </h6>
                  </div>
                 
                </div>
              </div> : <div></div>

              }
              
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <div className="wow slideInLeft">
        <News />
      </div>
      <div className="wow slideInRight">
        <Footer />
      </div>
    </>
  );
}

export default Tracking;
