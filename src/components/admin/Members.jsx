import React, { useEffect, useState} from "react";
import { Link, useParams  } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./Layout";
import EditUser from "./EditUser";

function Members() {
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

  let { userid } = useParams();

  const [users, setusers] = useState([]);

  const getMembers = () => {
    axios
      .get("https://api.biafinance.org/admin/users.php")
      .then((res) => {
        if (res.data.status === "success") {
          const val = Object.values(res.data.data.users);
          setusers(val);
        }
      })
      .catch((err) => {
        notify(err.response.data.message);
      });
  };



  const handleDelete = id => {
    const formdata = new FormData()
    formdata.append("userid",id)
    axios.post("https://api.biafinance.org/admin/deleteUser.php",formdata)
        .then((res) => {
            notify(res.data.message)
            setTimeout(() => {
                window.location.reload()
            }, 1000);
        }).catch((err) => {
            notify(err.response.data.message)
        })
}

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <div>
      <Layout>
        <div className="row">
          {userid ? <EditUser userid={userid} /> : ""}

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

          <div className="col-md-11  shadow rounded m-auto p-3">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h6 className="text-light" style={{ fontSize: "15px" }}>
                Members
              </h6>
              <button className="btn bg-blue btn-sm">
                  <Link to="/admin/dashboard/create-account">
                <i className="fa fa-plus text-white"></i> Create account
                  </Link>
              </button>
            </div>
            <div className="table-responsive bg-dark">
              <table className="table table-hover table-striped">
                <tbody>
                  <tr>
                    <td>
                      <small>userid</small>
                    </td>
                    <td>
                      <small>Full Name</small>
                    </td>
                    <td>
                      <small>Email</small>
                    </td>
                    <td>
                      <small>Address</small>
                    </td>
                    <td>
                      <small>State</small>
                    </td>
                    <td>
                      <small>Country</small>
                    </td>
                    <td>
                      <small>D.O.B</small>
                    </td>
                    <td>
                      <small>Account Bal</small>
                    </td>
                    <td>
                      <small>Account Num</small>
                    </td>
                    <td>
                      <small>Pin</small>
                    </td>
                    <td>
                      <small>Password</small>
                    </td>
                    <td>
                      <small>isAdmin</small>
                    </td>
                    <td>
                      <small>Joined On</small>
                    </td>
                    <td className="text-blue">
                      Edit <i className="fa fa-edit text-blue"></i>
                    </td>
                    <td className="text-danger">
                      Delete <i className="fa fa-trash text-danger"></i>
                    </td>
                  </tr>

                  {users ? (
                    users.map((user, i) => (
                      <tr key={i}>
                        <td>
                          <small>{user.userid}</small>
                        </td>
                        <td>
                          <small>{user.fullname}</small>
                        </td>
                        <td>
                          <small>{user.email}</small>
                        </td>
                        <td>
                          <small>{user.address}</small>
                        </td>
                        <td>
                          <small>{user.state}</small>
                        </td>
                        <td>
                          <small>{user.country}</small>
                        </td>
                        <td>
                          <small>{user.dob}</small>
                        </td>
                        <td>
                          <small>{user.accountbalance}</small>
                        </td>
                        <td>
                          <small>{user.accoutnumber}</small>
                        </td>
                        <td>
                          <small>{user.pin}</small>
                        </td>
                        <td>
                          <small>{user.password}</small>
                        </td>
                        <td>
                          <small>{user.isadmin}</small>
                        </td>
                        <td>
                          <small>{user.createdAt}</small>
                        </td>
                        <td>
                          <Link
                            to={`/admin/dashboard/users/${user.userid}`}
                            className="badge badge-primary"
                          >
                            Edit
                          </Link>
                        </td>
                        <td onClick={e=> handleDelete(user.userid)}>
                          <span className="badge badge-danger">Delete</span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>No User Found</td>
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

export default Members;
