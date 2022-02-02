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
      .get("https://base.guaranteedcapita.com/admin/cashMails.php")
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

          <div className="col-md-10  card rounded m-auto p-3">
            <div className="mb-4">
              <h1 className="text-dark" style={{ fontSize: "15px" }}>
                Mailed cash
              </h1>
            </div>
            <div className="table-responsive">
              <table className="table">

                <tbody>
                  
                <tr>
                  <td className="text-dark">
                    <small className="text-dark">S/N</small>
                  </td>
                  <td>
                    <small className="text-dark">Senders Id</small>
                  </td>
                  <td>
                    <small className="text-dark">Tracking</small>
                  </td>
                  <td>
                    <small className="text-dark">Recpient Address</small>
                  </td>
                  <td>
                    <small className="text-dark">Zip Code</small>
                  </td>
                  <td>
                    <small className="text-dark">Amount</small>
                  </td>
                  <td>
                    <small className="text-dark">Location</small>
                  </td>
                  <td>
                    <small className="text-dark">Status</small>
                  </td>
                  <td>
                    <small className="text-dark">Date</small>
                  </td>
                  <td>
                    <small className="text-dark">Actions</small>
                  </td>
                </tr>
                  {cashmails ? (
                    cashmails.map((cashmail, i) => (
                      <tr key={i}>
                        <td className="text-dark">{i}</td>
                        <td>
                          <small className="text-dark">{cashmail.userid}</small>
                        </td>
                        <td>
                          <small className="text-dark">{cashmail.tracking}</small>
                        </td>
                        <td>
                          <small className="text-dark">{cashmail.addresses}</small>
                        </td>
                        <td>
                          <small className="text-dark">{cashmail.zipcode}</small>
                        </td>
                        <td>
                          <small className="text-dark">{cashmail.amount}</small>
                        </td>
                        <td>
                          <small className="text-dark">{cashmail.locations}</small>
                        </td>
                        <td>
                          <small className="text-dark">{cashmail.statuz}</small>
                        </td>
                        <td>
                          <small className="text-dark">{cashmail.createdAt}</small>
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
