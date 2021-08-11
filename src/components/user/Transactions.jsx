import React from 'react'

import Layout from './Layout'

function Transactions() {
    return (
        <>
            <Layout>
                <div className="row">
                    <div className="col-md-10 m-auto shadow rounded pt-5">
                        <div className="table-responsive">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="text-blue mb-3 ml-2">All transactions</h5>
                                <button className="btn bg-blue btn-sm mb-3">
                                    <i className="fa fa-download text-white"> download report</i>
                                </button>
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
                                        <td><small>card payment</small></td>
                                        <td><small className="badge badge-info bg-blue">Clothing</small></td>
                                        <td><small>$ -15000</small></td>
                                        <td><small>06/21</small></td>
                                    </tr>
                                    <tr>
                                        <td><small>Transfer</small></td>
                                        <td><small className="badge badge-info bg-blue">groceries</small></td>
                                        <td><small>$ -15000</small></td>
                                        <td><small>06/21</small></td>
                                    </tr>
                                    <tr>
                                        <td><small>card payment</small></td>
                                        <td><small className="badge badge-info bg-blue">shopping</small></td>
                                        <td><small>$ -15000</small></td>
                                        <td><small>06/21</small></td>
                                    </tr>
                                    <tr>
                                        <td><small>Deposit</small></td>
                                        <td><small className="badge badge-info bg-blue">ticket</small></td>
                                        <td><small>$ +15000</small></td>
                                        <td><small>06/21</small></td>
                                    </tr>
                                    <tr>
                                        <td><small>card payment</small></td>
                                        <td><small className="badge badge-info bg-blue">Clothing</small></td>
                                        <td><small>$ -15000</small></td>
                                        <td><small>06/21</small></td>
                                    </tr>
                                    <tr>
                                        <td><small>card payment</small></td>
                                        <td><small className="badge badge-info bg-blue">Clothing</small></td>
                                        <td><small>$ -15000</small></td>
                                        <td><small>06/21</small></td>
                                    </tr>
                                    <tr>
                                        <td><small>card payment</small></td>
                                        <td><small className="badge badge-info bg-blue">wristwatch</small></td>
                                        <td><small>$ +15000</small></td>
                                        <td><small>06/21</small></td>
                                    </tr>
                                    <tr>
                                        <td><small>card payment</small></td>
                                        <td><small className="badge badge-info bg-blue">Clothing</small></td>
                                        <td><small>$ -15000</small></td>
                                        <td><small>06/21</small></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Transactions
