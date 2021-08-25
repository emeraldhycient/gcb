import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditUser({ userid }) {
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

  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [address, setaddress] = useState("");
  const [dob, setdob] = useState("");
  const [pin, setpin] = useState("");
  const [password, setpassword] = useState("");
  const [isadmin, setisadmin] = useState("");
  const [accountbalance, setaccountbalance] = useState("");

  const updateAccount = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("userid", userid);
    formdata.append("fullname", fullname);
    formdata.append("email", email);
    formdata.append("country", country);
    formdata.append("state", state);
    formdata.append("address", address);
    formdata.append("dob", dob);
    formdata.append("pin", pin);
    formdata.append("password", password);
    formdata.append("isadmin", isadmin);
    formdata.append("accountbalance", accountbalance);

    axios({
      method: "POST",
      url: "http://localhost/Bia%20finance/backend/admin/updateUser.php",
      data: formdata,
    })
      .then((res) => {
        notify(res.data.message);
      })
      .catch((err) => {
        notify(err.response.data.message);
      });

    return false;
  };

  useEffect(() => {
    const formdata = new FormData();
    formdata.append("userid", userid);
    axios
      .post(
        "http://localhost/Bia%20finance/backend/admin/getUser.php",
        formdata
      )
      .then((res) => {
        if (res.data.status === "success") {
          setfullname(res.data.data.fullname);
          setemail(res.data.data.email);
          setaccountbalance(res.data.data.accountbalance);
          setaddress(res.data.data.address);
          setcountry(res.data.data.country);
          setdob(res.data.data.dob);
          setisadmin(res.data.data.isadmin);
          setpassword(res.data.data.password);
          setpin(res.data.data.pin);
          setstate(res.data.data.state);
        }
      })
      .catch((err) => {
        notify(err.response.data.message);
      });
  }, []);

  return (
    <div>
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

      <div className="col-md-11  shadow rounded ml-auto mr-auto mt-3 mb-5 p-3">
        <div className="mb-4">
          <h1 className="text-light" style={{ fontSize: "15px" }}>
            Edit user
          </h1>
        </div>
        <form action="" className="form-group" onSubmit={updateAccount}>
          <div className="row">
            <div className="col-md-6 mb-3 ">
              <label className="text-muted">Full Name</label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                value={fullname}
                onChange={(e) => setfullname(e.target.value)}
                placeholder=""
                required
              />
            </div>
            <div className="col-md-6 mb-3 ">
              <label className="text-muted">email</label>
              <input
                type="email"
                className="form-control bg-dark text-light"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder=""
                required
              />
            </div>
            <div className="col-md-6 mb-3 ">
              <label className="text-muted">Address</label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                placeholder=""
                value={address}
                onChange={(e) => setaddress(e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3 ">
              <label className="text-muted">State</label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                placeholder=""
                value={state}
                onChange={(e) => setstate(e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3 ">
              <label className="text-muted">Country</label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                placeholder=""
                value={country}
                onChange={(e) => setcountry(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3 ">
              <label className="text-muted">D.o.B</label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                placeholder=""
                value={dob}
                onChange={(e) => setdob(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3 ">
              <label className="text-muted">Account balance</label>
              <input
                type="number"
                className="form-control bg-dark text-light"
                value={accountbalance}
                onChange={(e) => setaccountbalance(e.target.value)}
                placeholder=""
              />
            </div>

            <div className="col-md-6 mb-3 ">
              <label className="text-muted">Pin</label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                placeholder=""
                value={pin}
                onChange={(e) => setpin(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3 ">
              <label className="text-muted">Password</label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                placeholder=""
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>

            <div className="col-md-6 mb-3 ">
              <label className="text-muted">isAdmin</label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                value={isadmin}
                onChange={(e) => setisadmin(e.target.value)}
                placeholder="true or false"
              />
            </div>
          </div>
          <button type="submit" className="btn bg-blue">
            <i className="fa fa-wrench"></i> update Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
