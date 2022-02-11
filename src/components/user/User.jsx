import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./Layout";
import Cardmaker from "../cardmaker/Cardmaker";
import DoughnutChart from "../Charts/Doughnut ";

function User() {
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
  const [number] = useState("5110 1212 2323 3454");

  const [fullname, setfullname] = useState("");
  const [accountnumber, setaccountnumber] = useState("");
  const [acctbalance, setacctbalance] = useState("");

  const [totalexpenses, settotalexpenses] = useState("");
  const [transactions, settransactions] = useState("");

  const getTransactions = () => {
    const formdata = new FormData();
    formdata.append("userid", sessionStorage.getItem("userid"));

    axios({
      method: "POST",
      url: "https://base.guaranteedcapita.com/user/transactions.php",
      data: formdata,
    })
      .then((res) => {
        let val = Object.values(res.data.data);
        val = val.slice(0, 3);
        settransactions(val);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const gettotalexpenses = () => {
    const formdata = new FormData();
    formdata.append("userid", sessionStorage.getItem("userid"));

    axios({
      method: "POST",
      url: "https://base.guaranteedcapita.com/user/totalexpenses.php",
      data: formdata,
    })
      .then((res) => {
        settotalexpenses(res.data.data.amount);
      })
      .catch((err) => {
        notify(err.response.data.message);
      });
  };

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
      })
      .catch((err) => {
        notify(err.response.data.message);
      });
  };

  useEffect(() => {
    userdetail();
    gettotalexpenses();
    getTransactions();
  }, []);

  const d = new Date();
  const dat = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d
    .getHours()
    .toLocaleString()}:${d.getMinutes()}`;

  return (
    <div>
      <Layout>
        <div className="row mb-2 mt-1">
          <div
            className="col-md-12 bg-info rounded"
            style={{ height: "100px" }}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex  align-items-center">
                  <div className="profile mt-2">
                    <img
                      src={require("./24 29.png").default}
                      style={{ height: "65px", width: "65px" }}
                      alt=""
                    />
                  </div>
                  <div className="ml-3 mt-3">
                    <h5 className="text-capitalize text-light">
                      Welcome back, {fullname}
                    </h5>
                    <h6>
                      <small className="text-light">
                        Your login session {dat}
                      </small>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-none d-lg-block d-md-block">
                <div className="d-flex  align-items-center justify-content-around">
                  <div className=" mt-2">
                    <h6
                      className=""
                      style={{ color: "#cacaca", fontSize: "12px" }}
                    >
                      Available Fund
                    </h6>
                    <h3 className="text-light">
                      ${acctbalance.toLocaleString()}
                    </h3>
                  </div>
                  <div className="ml-3 mt-2 ">
                    <div class="dropdown">
                      <button
                        class="btn mb-2 bg-blue dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-share-alt-square mr-1"></i> Transfer
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a
                          class="dropdown-item"
                          href="/user/dashboard/transfer/local"
                        >
                          Local Transfer (0.5 %)
                        </a>
                        <a
                          class="dropdown-item"
                          href="/user/dashboard/transfer/international"
                        >
                          International Transfer (2%)
                        </a>
                      </div>
                    </div>

                    <div class="dropdown">
                      <button
                        class="btn  bg-blue dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-paper-plane mr-1"></i> Cash Mailing
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-7 card rounded mb-3 d-md-none d-lg-none">
          <div className="container py-3">
            <div className="row">
              <div className="col-md-8">
                <div className=" mt-2">
                  <h6
                    className=""
                    style={{ color: "#cacaca", fontSize: "12px" }}
                  >
                    Available Fund
                  </h6>
                  <h3 className="text-dark">${acctbalance.toLocaleString()}</h3>
                </div>
                <div class="dropdown">
                  <button
                    class="btn mb-2 bg-blue dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-share-alt-square mr-1"></i> Transfer
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a
                      class="dropdown-item"
                      href="/user/dashboard/transfer/local"
                    >
                      Local Transfer (0.5 %)
                    </a>
                    <a
                      class="dropdown-item"
                      href="/user/dashboard/transfer/international"
                    >
                      International Transfer (2%)
                    </a>
                  </div>
                </div>

                <div class="dropdown">
                  <button
                    class="btn  bg-blue dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-paper-plane mr-1"></i> Cash Mailing
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
            </div>
          </div>
        </div>

        <div className="col-md-7 card rounded mb-3">
          <div className="container py-3">
            <div className="row">
              <div className="col-md-8">
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
                <h6
                  className="text-dark"
                  style={{ color: "#cacaca", fontSize: "12px" }}
                >
                  Main Account
                </h6>
                <div className="">
                  <h5 className="text-blue mt-3 mb-0 text-capitalize">
                    {fullname}
                  </h5>
                  <small className="text-muted">{accountnumber}</small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-evenly mt-4">
                  <div className="d-flex justify-content-evenly mr-3">
                    <div className="mt-2">
                      <span className="iconshadow bg-info mr-1">
                        <i className="fa fa-arrow-down text-light"></i>
                      </span>
                    </div>
                    <div className="">
                      <h6 className="text-blue ml-1">
                        ${acctbalance.toLocaleString()}
                      </h6>
                      <small className="text-dark">Income</small>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly">
                    <div className="mt-2">
                      <span className="iconshadow bg-info mr-1">
                        <i className="fa fa-arrow-up text-warning"></i>
                      </span>
                    </div>
                    <div className="">
                      <h6 className="text-blue ml-1">
                        ${totalexpenses ? totalexpenses.toLocaleString() : 0}
                      </h6>
                      <small className="text-dark">Expenses</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 card rounded mb-3 p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="text-dark" style={{ fontSize: "15px" }}>
                Latest transactions
              </h6>
              <button className="btn bg-blue btn-sm">
                <Link to="/user/dashboard/transactions">
                  <i className="fa fa-arrow-right text-white"></i>
                </Link>
              </button>
            </div>
            <div className="table-responsive">
              <table className="table">
                {/* <thead>
                                    <th><small>method</small></th>
                                    <th><small>Purpose</small></th>
                                    <th><small>Amount</small></th>
                                    <th><small>Date</small></th>
                                </thead> */}
                <tbody>
                  {transactions ? (
                    transactions.map((transaction, i) => (
                      <tr key={i}>
                        <td className="text-dark">{transaction.tx_ref}</td>
                        <td>
                          <small className="text-dark">bank transfer</small>
                        </td>
                        <td>
                          <small className="badge badge-info bg-blue">
                            {transaction.purpose}
                          </small>
                        </td>
                        <td>
                          <small className="text-dark">
                            -${transaction.amount}
                          </small>
                        </td>
                        <td>
                          <small className="text-dark">
                            {transaction.createdAt}
                          </small>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="text-dark"> no transactions found</tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-4 card rounded mb-3 p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="text-info" style={{ fontSize: "15px" }}>
                Cash Flow
              </h6>
              <button className="btn bg-blue btn-sm">
                <i className="fa fa-arrow-right text-white"></i>
              </button>
            </div>
            <DoughnutChart />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default User;
