import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./Layout";
import Cardmaker from "../cardmaker/Cardmaker";
import carddatas from "../Data/user/carddatas";
import { Link } from "react-router-dom";

function Card() {
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

  const [cvc] = useState("231");
  const [expiry] = useState("12/22");
  const [focus] = useState("number");
  const [name] = useState("emma emeka");
  const [number] = useState("5110 1212 2323 3454");

  const [cards] = useAtom(carddatas);

  const [fullname, setfullname] = useState("");
  const [accountnumber, setaccountnumber] = useState("");
  const [acctbalance, setacctbalance] = useState("");

  const [status, setstatus] = useState(true);

  const userdetail = (e) => {
    const formdata = new FormData();
    formdata.append("userid", sessionStorage.getItem("userid"));

    axios({
      method: "POST",
      url: "https://base.guaranteedcapita.com/user/userdetails.php",
      data: formdata,
    })
      .then((res) => {
        setfullname(res.data.data.fullname);
        setaccountnumber(res.data.data.accoutnumber);
        setacctbalance(res.data.data.accountbalance);
        setstatus(res.data.data.status);
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
        {status ? (
          <>
            <div className="row mb-5">
              <div className="col-md-7 mb-3">
                <div className="container shadow rounded p-3">
                  <div className="row">
                    <div className="col-md-8">
                      <h6
                        className="text-muted"
                        style={{ color: "#cacaca", fontSize: "12px" }}
                      >
                        Main Account
                      </h6>
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
                      <div className="">
                        <h5 className="text-light mt-3 mb-0 text-capitalize">
                          {fullname}
                        </h5>
                        <small className="text-muted">{accountnumber}</small>
                      </div>
                      <div class="dropdown">
                        <button
                          class="btn mt-4 bg-blue dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-paper-plane mr-1"></i> Cash
                          Mailing
                        </button>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a
                            class="dropdown-item"
                            href="/user/dashboard/mailcash/local"
                          >
                            Local Cash Mailing (0.5 %)
                          </a>
                          <a
                            class="dropdown-item"
                            href="/user/dashboard/mailcash/international"
                          >
                            International Cash Mailing (2%)
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-1 mb-5"></div>
                    <div className="col-md-3">
                      <h6
                        className="text-muted"
                        style={{ color: "#cacaca", fontSize: "12px" }}
                      >
                        Available Fund
                      </h6>
                      <h3 className="mt-3 text-blue">
                        ${acctbalance.toLocaleString()}
                      </h3>
                      <button className="btn bg-blue mt-4">
                        <i className="fa fa-credit-card mr-1"></i> Order Card
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-4 pl-0 mb-3">
                <Cardmaker
                  cvc={cvc}
                  expiry={expiry}
                  focus={focus}
                  name={fullname}
                  number={number}
                />
              </div>
            </div>
            <div className="row">
              {cards.map((card, i) => (
                <div className="col-md-4 pl-0 mb-3" key={i}>
                  <Cardmaker
                    cvc={card.cvv}
                    expiry={card.expires}
                    focus={focus}
                    name={fullname}
                    number={card.numbers}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <center>
            <img
              src="https://img.icons8.com/color/96/000000/restriction-shield.png"
              className="mt-4 blink_me"
            />
            <h2 className="text-light mt-3 blink_me">
              Your account has been blocked pls contact admin
            </h2>
          </center>
        )}
      </Layout>
    </div>
  );
}

export default Card;
