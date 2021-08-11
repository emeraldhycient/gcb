import React from 'react'
import { Link } from 'react-router-dom'


import Layout from './Layout'
import DoughnutChart from '../Charts/Doughnut '

function Admin() {
    return (
        <div>
            <Layout>
                <div className="row mt-3">
                    <div className="col-md-5 mt-5 mb-5 mr-auto ml-auto shadow ">
                        <div className="row">
                            <div className="col-md-3 bg-blue d-flex justify-content-center align-items-center">
                                <i className="fa fa-users fa-4x"></i>
                            </div>
                            <div className="col-md-9 text-center p-3">
                                <h3 className="text-light mb-2">Users</h3>
                                <hr className="text-danger" />
                                <h2 className="text-blue">234</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 mt-5 mb-5 mr-auto ml-auto shadow ">
                        <div className="row">
                            <div className="col-md-3 bg-blue d-flex justify-content-center align-items-center">
                                <i className="fa fa-paper-plane fa-4x"></i>
                            </div>
                            <div className="col-md-9 text-center p-3">
                                <h3 className="text-light mb-2">Transfers</h3>
                                <hr className="text-danger" />
                                <h2 className="text-blue">234</h2>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-3">
                    <div className="col-md-7 shadow rounded mb-3 p-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <h6 className="text-light" style={{ fontSize: '15px' }}>Latest transactions</h6>
                            <button className="btn bg-blue btn-sm">
                                <Link to='/user/dashboard/transactions'><i className="fa fa-arrow-right text-white"></i></Link>
                            </button>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                {/* <thead>
                                    <th><small>method</small></th>
                                    <th><small>Purpose</small></th>
                                    <th><small>Amount</small></th>
                                    <th><small>Date</small></th>
                                </thead> */}
                                <tr>
                                    <td><small>card payment</small></td>
                                    <td><small className="badge badge-info bg-blue">Clothing</small></td>
                                    <td><small>$ -15000</small></td>
                                    <td><small>06/21</small></td>
                                </tr>
                                <tr>
                                    <td><small>Transfer</small></td>
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
                                    <td><small>Deposit</small></td>
                                    <td><small className="badge badge-info bg-blue">Clothing</small></td>
                                    <td><small>$ +15000</small></td>
                                    <td><small>06/21</small></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4 shadow rounded mb-3 p-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <h6 className="text-info" style={{ fontSize: '15px' }}>Cash Flow</h6>
                            <button className="btn bg-blue btn-sm"><i className="fa fa-arrow-right text-white"></i></button>
                        </div>
                        <DoughnutChart />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Admin
