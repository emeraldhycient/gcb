import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditMail({ tracking }) {
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

    const [senderid, setsenderid] = useState("")
    const [address, setaddress] = useState("")
    const [zipcode, setzipcode] = useState("")
    const [amount, setamount] = useState("")
    const [location, setlocation] = useState("")
    const [status, setstatus] = useState("")

    const handleUpdate = (e)=>{
        e.preventDefault()

        const formdata = new FormData()
        formdata.append("tracking",tracking)
        formdata.append("address",address)
        formdata.append("zipcode",zipcode)
        formdata.append("amount",amount)
        formdata.append("location",location)
        formdata.append("status",status)

        axios.post("https://api.biafinancebank.com/admin/editCashMail.php",formdata)
        .then((res) => {
            if (res.data.status === "success") {
                notify(res.data.message)
            }
          })
          .catch((err) => {
            notify(err.response.data.message);
          });
       

        return false
    }

    useEffect(() => {

        const formdata = new FormData()
        formdata.append("tracking",tracking)
        axios.post("https://api.biafinancebank.com/admin/cashMail.php",formdata)
        .then((res) => {
            if (res.data.status === "success") {
                setsenderid(res.data.data.userid)
                setaddress(res.data.data.addresses)
                setzipcode(res.data.data.zipcode)
                setamount(res.data.data.amount)
                setlocation(res.data.data.locations)
                setstatus(res.data.data.statuz)
            }
          })
          .catch((err) => {
            notify(err.response.data.message);
          });
       
    }, [])

  return (
    <div>
      <div className="col-md-10  shadow rounded ml-auto mr-auto mt-3 mb-5 px-3 pt-3 pb-5">
        <div className="mb-4">
          <h1 className="text-light" style={{ fontSize: "15px" }}>
            Edit Mail
          </h1>
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
        <form action="" className="form-group" onSubmit={handleUpdate}>
          <div className="row">
            <div className="col-md-6 mb-3 ">
              <label className="text-muted">Senders id</label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                value={senderid} onChange={e=> setsenderid(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="col-md-6 mb-3 ">
              <label className="text-muted">Receivers address</label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                value={address} onChange={e=> setaddress(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="col-md-6 mb-3 ">
              <label className="text-muted">Zip code</label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                value={zipcode} onChange={e=> setzipcode(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="col-md-6 mb-3 ">
              <label className="text-muted">Amount</label>
              <input
                type="number"
                className="form-control bg-dark text-light"
                value={amount} onChange={e=> setamount(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="col-md-6 mb-3 ">
              <label className="text-muted">Location</label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                placeholder=""
                value={location} onChange={e=> setlocation(e.target.value)}
                required
              />
            </div>

            <div className="col-md-6 mb-3 ">
              <label className="text-muted">Status</label>
              <select className="form-control" value={status} onChange={e=> setstatus(e.target.value)} required>
                <option value="Intransit">In transit</option>
                <option value="onHold">on Hold</option>
                <option value="Canceled">Canceled</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn bg-blue float-right">
            <i className="fa fa-wrench"></i> UpDate
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditMail;
