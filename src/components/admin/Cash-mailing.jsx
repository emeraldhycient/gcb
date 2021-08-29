import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import EditMail from "./EditMail";
import Layout from "./Layout";

function Cashmailing() {
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

  const { tracking } = useParams();

  const [cashmails, setcashmails] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.biafinance.org/admin/cashMails.php")
      .then((res) => {
        if (res.data.status === "success") {
          const val = Object.values(res.data.data);
          setcashmails(val);
        }
      })
      .catch((err) => {
        notify(err.response.data.message);
      });
  }, []);

  return (
    <div>
      <Layout>
        <div className="row mt-3 mb-3">
          {tracking ? <EditMail tracking={tracking}/> : ""}

          <br />
          <br />
          <br />
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

          <div className="col-md-10  shadow rounded m-auto p-3">
            <div className="mb-4">
              <h1 className="text-light" style={{ fontSize: "15px" }}>
                Mailed cash
              </h1>
            </div>
            <div className="table-responsive">
              <table className="table">

                <tbody>
                  
                <tr>
                  <td>
                    <small>S/N</small>
                  </td>
                  <td>
                    <small>Senders Id</small>
                  </td>
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
                  <td>
                    <small>Actions</small>
                  </td>
                </tr>
                  {cashmails ? (
                    cashmails.map((cashmail, i) => (
                      <tr key={i}>
                        <td>{i}</td>
                        <td>
                          <small>{cashmail.userid}</small>
                        </td>
                        <td>
                          <small>{cashmail.tracking}</small>
                        </td>
                        <td>
                          <small>{cashmail.addresses}</small>
                        </td>
                        <td>
                          <small>{cashmail.zipcode}</small>
                        </td>
                        <td>
                          <small>{cashmail.amount}</small>
                        </td>
                        <td>
                          <small>{cashmail.locations}</small>
                        </td>
                        <td>
                          <small>{cashmail.statuz}</small>
                        </td>
                        <td>
                          <small>{cashmail.createdAt}</small>
                        </td>
                        <td>
                          <Link
                            to={`/admin/dashboard/cash-mailing/${cashmail.tracking}`}
                            className="badge badge-primary"
                          >
                            Edit
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>no mailing has been initiated</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Cashmailing;
