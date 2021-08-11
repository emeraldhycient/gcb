import React from 'react'
import { Link } from 'react-router-dom'

import Layout from './Layout'

function Cashmailing() {

    const EditMail = () => (
        <div className="col-md-10  shadow rounded ml-auto mr-auto mt-3 mb-5 p-3">
            <div className="mb-4">
                <h1 className="text-light" style={{ fontSize: '15px' }}>Edit Mail</h1>
            </div>
            <form action="" className="form-group">
                <div className="row">
                    <div className="col-md-6 mb-3 ">
                        <label className="text-muted">Senders Name</label>
                        <input type="text" className="form-control bg-dark text-light" placeholder="" />
                    </div>
                    <div className="col-md-6 mb-3 ">
                        <label className="text-muted">Receivers address</label>
                        <input type="text" className="form-control bg-dark text-light" placeholder="" />
                    </div>
                    <div className="col-md-6 mb-3 ">
                        <label className="text-muted">Zip code</label>
                        <input type="text" className="form-control bg-dark text-light" placeholder="" />
                    </div>
                    <div className="col-md-6 mb-3 ">
                        <label className="text-muted">Amount</label>
                        <input type="number" className="form-control bg-dark text-light" placeholder="" />
                    </div>
                    <div className="col-md-6 mb-3 ">
                        <label className="text-muted">Location</label>
                        <input type="text" className="form-control bg-dark text-light" placeholder="" />
                    </div>

                    <div className="col-md-6 mb-3 ">
                        <label className="text-muted">Status</label>
                        <select className="form-control">
                            <option value="Intransit">In transit</option>
                            <option value="onHold">on Hold</option>
                            <option value="Canceled">Canceled</option>
                        </select>
                    </div>

                </div>
                <button type="submit" className="btn bg-blue float-right"><i className="fa fa-wrench"></i> UpDate</button>
            </form>
        </div>
    )

    return (
        <div>
            <Layout>
                <div className="row mt-3 mb-3">

                    {/* <EditMail /> */}

                    <br />
                    <br />
                    <br />

                    <div className="col-md-10  shadow rounded m-auto p-3">
                        <div className="mb-4">
                            <h1 className="text-light" style={{ fontSize: '15px' }}>Mailed cash</h1>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <tr>
                                    <td><small>Sender</small></td>
                                    <td><small>Recpient Address</small></td>
                                    <td><small>Zip Code</small></td>
                                    <td><small>Amount</small></td>
                                    <td><small>Location</small></td>
                                    <td><small>Status</small></td>
                                    <td><small>Date</small></td>
                                    <td><small>Actions</small></td>
                                </tr>
                                <tr>
                                    <td><small>j p morgan rose</small></td>
                                    <td><small>4 st rose avenue 234 washingon</small></td>
                                    <td><small>1021</small></td>
                                    <td><small>$ 15000</small></td>
                                    <td><small>brazil</small></td>
                                    <td><small>in transit</small></td>
                                    <td><small>06/21</small></td>
                                    <td><Link to={`/admin/dashboard/cash-mailing/12wew2ws`} className="badge badge-primary">Edit</Link></td>
                                </tr>
                                <tr>
                                    <td><small>j p morgan rose</small></td>
                                    <td><small>4 st rose avenue 234 washingon</small></td>
                                    <td><small>1021</small></td>
                                    <td><small>$ 15000</small></td>
                                    <td><small>brazil</small></td>
                                    <td><small>Canceled</small></td>
                                    <td><small>06/21</small></td>
                                    <td><Link to={`/admin/dashboard/cash-mailing/12wew2ws`} className="badge badge-primary">Edit</Link></td>
                                </tr>
                                <tr>
                                    <td><small>j p morgan rose</small></td>
                                    <td><small>4 st rose avenue 234 washingon</small></td>
                                    <td><small>1021</small></td>
                                    <td><small>$ 15000</small></td>
                                    <td><small>brazil</small></td>
                                    <td><small>onhold</small></td>
                                    <td><small>06/21</small></td>
                                    <td><Link to={`/admin/dashboard/cash-mailing/12wew2ws`} className="badge badge-primary">Edit</Link></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Cashmailing
