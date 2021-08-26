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
      .post(
        "https://api.biafinancebank.com/user/tracking.php",
        formdata
      )
      .then((res) => {
        if (res.data.status === "success") {
            notify(res.data.message)
            setmail(res.data.data)
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
                <h6 className="text-light mb-5 hideit wow bounceInUp" >follow your money across the globe from the comfort of your home,you don't have to stand up from your computer. </h6>
                <form action="" onSubmit={handleTracking}>
                  <div className="d-flex bordered rounded py-2 pr-2 justify-content-between align-items-center bg-light">
                    <input
                      type="text"
                      placeholder="Enter Your Tracking"
                      className="form-control no-border"
                      value={tracking}
                      onChange={(e) => settracking(e.target.value)}
                      style={{ fontFamily: "sans-serif",width:'70%' }}
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
                <img src={bike} alt="" height="200px" width="400px" className="wow slideInLeft" />
              </div>
            </div>

            <div className="row">
                <div className="col-md-10 m-auto bg-dark py-2">
                    {
                        mail ? 
                        <div className="table-responsive wow slideInLeft">
                           <center> <h3 className="text-white py-1">Mail Details</h3></center>
                        <table className="table">
                          <tbody >
                          <tr>
                            <td>
                              <small>Tracking</small>
                            </td>
                            <td>
                              <small>Recpient Address</small>
                            </td>
                            <td>
                              <small>Zip Code</small>
                            </td>
                            <td>
                              <small>Amount</small>
                            </td>
                            <td>
                              <small>Location</small>
                            </td>
                            <td>
                              <small>Status</small>
                            </td>
                            <td>
                              <small>Date</small>
                            </td>
                          </tr>
                           
                                <tr key={mail.id}>
                                  <td>
                                    <small>{mail.tracking}</small>
                                  </td>
                                  <td>
                                    <small>{mail.addresses}</small>
                                  </td>
                                  <td>
                                    <small>{mail.zipcode}</small>
                                  </td>
                                  <td>
                                    <small>{mail.amount}</small>
                                  </td>
                                  <td>
                                    <small>{mail.locations}</small>
                                  </td>
                                  <td>
                                    <small>{mail.statuz}</small>
                                  </td>
                                  <td>
                                    <small>{mail.createdAt}</small>
                                  </td>
                                </tr>                            
                          </tbody>
                        </table>
                      </div>
                        : ""
                    }
                </div>
            </div>

          </div>
        </div>
      </div>
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
