import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MakeTransfer() {
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

  const [userid, setuserid] = useState("");
  const [mode, setmode] = useState("");
  const [amount, setamount] = useState("");
  const [acctnumber, setacctnumber] = useState("");
  const [routing, setrouting] = useState("");
  const [acctname, setacctname] = useState("");
  const [date, setdate] = useState("");

  const handleTransfer = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("userid", userid);
    formdata.append("mode", mode);
    formdata.append("amount", amount);
    formdata.append("acctnumber", acctnumber);
    formdata.append("routing", routing);
    formdata.append("acctname", acctname);
    formdata.append("date", date);

    axios
      .post("https://api.biafinance.org/admin/makeTransfer.php", formdata)
      .then((res) => {
        notify(res.data.message);
      })
      .catch((err) => {
        notify(err.response.data.message);
      });

    return false;
  };

  return (
    <div className=" col-md-7 mx-auto my-4 pb-5">
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
      <h6 className="text-light mx-3">Create Transaction</h6>
      <form action="" className="form-group" onSubmit={handleTransfer}>
        <label htmlFor="userid" className="mx-3 mt-2 text-light">
          Userid
        </label>
        <input
          type="text"
          id="userid"
          placeholder="userid"
          className="form-control mb-3 mx-3 bg-dark text-light"
          value={userid}
          onChange={(e) => setuserid(e.target.value)}
          required
        />
        <label htmlFor="purpose" className="mx-3 text-light">
          mode
        </label>
        <select
          className="form-control mb-3 mx-3 bg-dark text-light"
          id="purpose"
          value={mode}
          onChange={(e) => setmode(e.target.value)}
        >
          <option value="debit">Debit</option>
          <option value="credit">Credit</option>
          <option value="bank transfer">Bank transfer</option>
          <option value="cash mailing">Cash mailing</option>
        </select>
        <label htmlFor="amount" className="mx-3 text-light">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Amount"
          className="form-control mb-3 mx-3 bg-dark text-light"
          value={amount}
          onChange={(e) => setamount(e.target.value)}
          required
        />
        <label htmlFor="acctnumber" className="mx-3 text-light">
          Account number
        </label>
        <input
          type="number"
          id="acctnumber"
          placeholder="account number"
          value={acctnumber}
          onChange={(e) => setacctnumber(e.target.value)}
          maxlength="10"
          className="form-control mb-3 mx-3 bg-dark text-light"
        />
        <label htmlFor="routing" className="mx-3 text-light">
          Routing number
        </label>
        <input
          type="number"
          id="routingg"
          value={routing}
          onChange={(e) => setrouting(e.target.value)}
          placeholder="routing number"
          maxlength="9"
          className="form-control mb-3 mx-3 bg-dark text-light"
        />
        <label htmlFor="acctname" className="mx-3 text-light">
          Account name
        </label>
        <input
          type="text"
          id="acctname"
          placeholder="account name"
          value={acctname}
          onChange={(e) => setacctname(e.target.value)}
          className="form-control mb-3 mx-3 bg-dark text-light"
        />
        <label htmlFor="date" className="mx-3 text-light">
          Date
        </label>
        <input
          type="text"
          id="date"
          placeholder="year-month-day"
          value={date}
          onChange={(e) => setdate(e.target.value)}
          className="form-control mb-3 mx-3 bg-dark text-light"
          required
        />
        <button type="submit" className="btn bg-blue float-right">
          Transact
        </button>
      </form>
    </div>
  );
}

export default MakeTransfer;
