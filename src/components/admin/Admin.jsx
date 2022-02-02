import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./Layout";
import DoughnutChart from "../Charts/Doughnut ";

function Admin() {
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

  const [totalUsers, settotalUsers] = useState(0);
  const [totalTransfer, settotalTransfer] = useState(0);
  const [transactions, settransactions] = useState([]);

  const getTotalUsers = (e) => {
    const formdata = new FormData();
    formdata.append("totaluser", "totaluser");
    axios({
      url: "https://base.guaranteedcapita.com/admin/totalUser.php",
      method: "POST",
      data: formdata,
    })
      .then((res) => {
        if (res.data.status === "success") {
          settotalUsers(res.data.data);
        }
      })
      .catch((err) => {
        notify(err.response.data.message);
      });
  };

  const getTotalTransfers = (e) => {
    const formdata = new FormData();
    formdata.append("totalTransfer", "totalTransfer");
    axios({
      url: "https://base.guaranteedcapita.com/admin/totalTransfers.php",
      method: "POST",
      data: formdata,
    })
      .then((res) => {
        if (res.data.status === "success") {
          settotalTransfer(res.data.data);
        }
      })
      .catch((err) => {
        notify(err.response.data.message);
      });
  };

  const getTransactions = () => {
    const formdata = new FormData();
    formdata.append("transactions", "transactions");
    axios
      .post("https://base.guaranteedcapita.com/admin/Transactions.php",formdata)
      .then((res) => {
          if(res.data.status === "success"){
              const val = Object.values(res.data.data);
              const data = val.splice(0,4)
              settransactions (data)
          }
      })
      .catch(err=>{
        notify(err.response.data.message);
      })
  };

  useEffect(() => {
    getTransactions();
    getTotalUsers();
    getTotalTransfers();
  },[]);

  return (
    <div>
      <Layout>
        <div className="row mt-3">
          <div className="col-md-5 mt-1 mb-3 mr-auto ml-auto card " style={{backgroundColor:"#fafafa"}}>
            <div className="row">
              <div className="col-md-3 bg-blue d-flex justify-content-center align-items-center">
                <i className="fa fa-users fa-4x"></i>
              </div>
              <div className="col-md-9 text-center p-3">
                <h3 className="text-dark mb-2">Users</h3>
                <hr className="text-danger" />
                <h2 className="text-blue">{totalUsers}</h2>
              </div>
            </div>
          </div>
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
          <div className="col-md-5 mt-1 mb-3 mr-auto ml-auto card " style={{backgroundColor:"#fafafa"}}>
            <div className="row">
              <div className="col-md-3 bg-blue d-flex justify-content-center align-items-center">
                <i className="fa fa-paper-plane fa-4x"></i>
              </div>
              <div className="col-md-9 text-center p-3">
                <h3 className="text-dark mb-2">Transfers</h3>
                <hr className="text-danger" />
                <h2 className="text-blue">{totalTransfer}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-7 card rounded mb-3 p-3">
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
                                    <th><small>userid</small></th>
                                    <th><small>tx_ref</small></th>
                                    <th><small>method</small></th>
                                    <th><small>Purpose</small></th>
                                    <th><small>Amount</small></th>
                                    <th><small>Date</small></th>
                                </thead> */}
                                <tbody>
                                        {
                                            transactions ? transactions.map((transaction,i)=>(

                                                <tr className="text-dark">
                                                    <td className="text-dark">{transaction.userid}</td>
                                                    <td className="text-dark">{transaction.tx_ref}</td>
                                                <td>
                                                  <small className="text-dark">online banking</small>
                                                </td>
                                                <td>
                                                  <small className="badge badge-info bg-blue">{transaction.purpose}</small>
                                                </td>
                                                <td>
                                                  <small className="text-dark">${transaction.amount}</small>
                                                </td>
                                                <td>
                                                  <small className="text-dark">{transaction.createdAt}</small>
                                                </td>
                                              </tr>
                                            )) : <tr><td className="text-dark">No Data Found</td></tr>
                                        }
                                </tbody>              
              </table>
            </div>
          </div>
          <div className="col-md-1"></div>
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

export default Admin;
