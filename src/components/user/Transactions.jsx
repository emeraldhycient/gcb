import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout";

function Transactions() {
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
        settransactions(val);
      })
      .catch((err) => {
        notify(err.response.data.message);
      });
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      <Layout>
        <div className="row">
          <div className="col-md-10 m-auto card rounded pt-5">
            <div className="table-responsive">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="text-blue mb-3 ml-2">All transactions</h5>
                <button className="btn bg-blue btn-sm mb-3">
                  <i className="fa fa-download text-white"> download report</i>
                </button>
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
              <table className="table text-dark">
                <tbody>
                  <tr>
                    <td><small className="text-dark">trans ref</small></td>
                    <td>
                      <small className="text-dark">method</small>
                    </td>
                    <td>
                      <small className="text-dark">Purpose</small>
                    </td>
                    <td>
                      <small className="text-dark">Amount</small>
                    </td>
                    <td>
                      <small className="text-dark">Date</small>
                    </td>
                  </tr>
                  {transactions
                    ? transactions.map((transaction, i) => (
                        <tr key={i}>
                            <td className="text-dark">{transaction.tx_ref}</td>
                          <td>
                            <small className="text-dark">online banking</small>
                          </td>
                          <td>
                            <small className="badge badge-info bg-blue">
                              {transaction.purpose}
                            </small>
                          </td>
                          <td>
                            <small className="text-dark">-${transaction.amount}</small>
                          </td>
                          <td>
                            <small className="text-dark">{transaction.createdAt}</small>
                          </td>
                        </tr>
                      ))
                    : <tr className="text-dark"> no transactions found</tr>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Transactions;
