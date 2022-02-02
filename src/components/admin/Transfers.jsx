import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./Layout";
import MakeTransfer from "./MakeTransfer";

function Transfers() {
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

  const [transactions, settransactions] = useState([]);

  const getTransactions = () => {
    const formdata = new FormData();
    formdata.append("transactions", "transactions");
    axios
      .post("https://base.guaranteedcapita.com/admin/Transactions.php", formdata)
      .then((res) => {
        if (res.data.status === "success") {
          const val = Object.values(res.data.data);
          settransactions(val);
        }
      })
      .catch((err) => {
        notify(err.response.data.message);
      });
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <Layout>
        <MakeTransfer />
        <div className="col-md-10 card rounded m-auto p-3">
          <div className="mb-4">
            <h6 className="text-dark" style={{ fontSize: "15px" }}>
              All transactions
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
                {transactions ? (
                  transactions.map((transaction, i) => (
                    <tr key={i}>
                      <td className="text-dark">{transaction.userid}</td>
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
                        <small className="text-dark">${transaction.amount}</small>
                      </td>
                      <td>
                        <small className="text-dark">{transaction.createdAt}</small>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="text-dark">No Data Found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Transfers;
