import React from 'react'

import Layout from './Layout'

function Loans() {
    return (
        <div>
            <Layout>
                <div className="row mt-4 mb-5">
                    <div className="col-md-10 m-auto shadow rounded pt-3">
                        <h6 className="text-light mb-3 ml-2">Checks Loan Eligibility</h6>
                        <form action="" className="form-inline">
                            <div className="input-group mb-3 col">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Amount</span>
                                </div>
                                <input type="text" className="form-control bg-info text-white" placeholder="....." aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <button className="btn bg-blue mb-3">Check Eligibility</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 m-auto shadow rounded pt-3">
                        <div className="table-responsive">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="text-blue mb-3 ml-2">Previous Loans</h5>
                            </div>
                            <table className="table text-dark">
                                <tbody>

                                    <tr>
                                        <td><small>method</small></td>
                                        <td><small>Purpose</small></td>
                                        <td><small>Amount</small></td>
                                        <td><small>Date</small></td>
                                    </tr>
                                    <tr>
                                        <td><small>Deposit</small></td>
                                        <td><small className="badge badge-info bg-blue">Clothing</small></td>
                                        <td><small>$ +15000</small></td>
                                        <td><small>06/21</small></td>
                                    </tr>
                                    <tr>
                                        <td><small>Deposit</small></td>
                                        <td><small className="badge badge-info bg-blue">Pharmacy</small></td>
                                        <td><small>$ +15000</small></td>
                                        <td><small>06/21</small></td>
                                    </tr>
                                    <tr>
                                        <td><small>Deposit</small></td>
                                        <td><small className="badge badge-info bg-blue">car repair</small></td>
                                        <td><small>$ +15000</small></td>
                                        <td><small>06/21</small></td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Loans
