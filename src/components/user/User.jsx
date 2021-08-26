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

  const [cvc, ] = useState("231");
  const [expiry, ] = useState("12/22");
  const [focus, ] = useState("number");
  const [number, ] = useState("5110 1212 2323 3454");

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
      url: "https://api.biafinancebank.com/user/transactions.php",
      data: formdata,
    })
      .then((res) => {
        let val = Object.values(res.data.data);
        val = val.slice(0, 3);
        settransactions(val);
      })
      .catch((err) => {
        notify(err.response.data.message);
      });
  };

  const gettotalexpenses = () => {
    const formdata = new FormData();
    formdata.append("userid", sessionStorage.getItem("userid"));

    axios({
      method: "POST",
      url: "https://api.biafinancebank.com/user/totalexpenses.php",
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
      url: "https://api.biafinancebank.com/user/userdetails.php",
      data: formdata,
    })
      .then((res) => {
        notify(res.data.message);
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

  return (
    <div>
      <Layout>
        <div className="row">
          <div className="col-md-7 shadow rounded mb-3">
            <div className="container p-3">
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
                    className="text-muted"
                    style={{ color: "#cacaca", fontSize: "12px" }}
                  >
                    Main Account
                  </h6>
                  <div className="">
                    <h5 className="text-light mt-3 mb-0 text-capitalize">
                      {fullname}
                    </h5>
                    <small className="text-muted">{accountnumber}</small>
                  </div>
                  <div className="d-flex justify-content-evenly mt-4">
                    <div className="d-flex justify-content-evenly mr-3">
                      <div className="mt-2">
                        <span className="iconshadow bg-info mr-1">
                          <i className="fa fa-arrow-down text-light"></i>
                        </span>
                      </div>
                      <div className="">
                        <h6 className="text-blue ml-1">
                          {acctbalance.toLocaleString()}
                        </h6>
                        <small className="text-muted">Income</small>
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
                          {totalexpenses ? totalexpenses.toLocaleString() : 0}
                        </h6>
                        <small className="text-muted">Expenses</small>
                      </div>
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
                    {" "}
                    {acctbalance.toLocaleString()}
                  </h3>
                  <button
                    className="btn mt-4 bg-blue"
                  >
                    <Link to="/user/dashboard/transfer">
                    <i className="fa fa-share-alt-square mr-1"></i> Transfer
                    </Link>
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
          <div className="col-md-7 shadow rounded mb-3 p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="text-light" style={{ fontSize: "15px" }}>
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
                  {transactions
                    ? transactions.map((transaction, i) => (
                        <tr key={i}>
                            <td>{transaction.tx_ref}</td>
                          <td>
                            <small>bank transfer</small>
                          </td>
                          <td>
                            <small className="badge badge-info bg-blue">
                              {transaction.purpose}
                            </small>
                          </td>
                          <td>
                            <small>-${transaction.amount}</small>
                          </td>
                          <td>
                            <small>{transaction.createdAt}</small>
                          </td>
                        </tr>
                      ))
                    : <tr> no transactions found</tr>}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4 shadow rounded mb-3 p-3">
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
