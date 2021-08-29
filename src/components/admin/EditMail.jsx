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
    const [detail1, setdetail1] = useState("")
    const [detail2, setdetail2] = useState("")
    const [detail3, setdetail3] = useState("")
    const [detail4, setdetail4] = useState("")
    const [detail5, setdetail5] = useState("")
    const [detail6, setdetail6] = useState("")
    const [status, setstatus] = useState("")

    const handleUpdate = (e)=>{
        e.preventDefault()

        const formdata = new FormData()
        formdata.append("tracking",tracking)
        formdata.append("address",address)
        formdata.append("zipcode",zipcode)
        formdata.append("amount",amount)
        formdata.append("location",location)
        formdata.append("detail1",detail1)
        formdata.append("detail2",detail2)
        formdata.append("detail3",detail3)
        formdata.append("detail4",detail4)
        formdata.append("detail5",detail5)
        formdata.append("detail6",detail6)
        formdata.append("status",status)

        axios.post("https://api.biafinance.org/admin/editCashMail.php",formdata)
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
        axios.post("https://api.biafinance.org/admin/cashMail.php",formdata)
        .then((res) => {
            if (res.data.status === "success") {
                setsenderid(res.data.data.userid)
                setaddress(res.data.data.addresses)
                setzipcode(res.data.data.zipcode)
                setamount(res.data.data.amount)
                setlocation(res.data.data.locations)
                setdetail1(res.data.data.detail1)
                setdetail2(res.data.data.detail2)
                setdetail3(res.data.data.detail3)
                setdetail4(res.data.data.detail4)
                setdetail5(res.data.data.detail5)
                setdetail6(res.data.data.detail6)
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
                
              />
            </div>

            <div className="col-md-6 mb-3 ">
              <label className="text-muted">Details 1</label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                placeholder=""
                value={detail1} onChange={e=> setdetail1(e.target.value)}
                
              />
            </div>

            <div className="col-md-6 mb-3 ">
              <label className="text-muted">Details 2</label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                placeholder=""
                value={detail2} onChange={e=> setdetail2(e.target.value)}
                
              />
            </div>

            <div className="col-md-6 mb-3 ">
              <label className="text-muted">Details 3</label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                placeholder=""
                value={detail3} onChange={e=> setdetail3(e.target.value)}
                
              />
            </div>

            <div className="col-md-6 mb-3 ">
              <label className="text-muted">Details 4</label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                placeholder=""
                value={detail4} onChange={e=> setdetail4(e.target.value)}
                
              />
            </div>

            <div className="col-md-6 mb-3 ">
              <label className="text-muted">Details 5</label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                placeholder=""
                value={detail5} onChange={e=> setdetail5(e.target.value)}
                
              />
            </div>

            <div className="col-md-6 mb-3 ">
              <label className="text-muted">Details 6</label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                placeholder=""
                value={detail6} onChange={e=> setdetail6(e.target.value)}
                
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
