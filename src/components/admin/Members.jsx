import React from 'react'
import { Link } from 'react-router-dom'

import Layout from './Layout'

function Members() {

    const EditUser = () => (
        <div className="col-md-11  shadow rounded ml-auto mr-auto mt-3 mb-5 p-3">
            <div className="mb-4">
                <h1 className="text-light" style={{ fontSize: '15px' }}>Edit Mail</h1>
            </div>
            <form action="" className="form-group">
                <div className="row">
                    <div className="col-md-6 mb-3 ">
                        <label className="text-muted">Full Name</label>
                        <input type="text" className="form-control bg-dark text-light" placeholder="" />
                    </div>
                    <div className="col-md-6 mb-3 ">
                        <label className="text-muted">email</label>
                        <input type="email" className="form-control bg-dark text-light" placeholder="" />
                    </div>
                    <div className="col-md-6 mb-3 ">
                        <label className="text-muted">Address</label>
                        <input type="text" className="form-control bg-dark text-light" placeholder="" />
                    </div>
                    <div className="col-md-6 mb-3 ">
                        <label className="text-muted">State</label>
                        <input type="text" className="form-control bg-dark text-light" placeholder="" />
                    </div>
                    <div className="col-md-6 mb-3 ">
                        <label className="text-muted">Country</label>
                        <input type="text" className="form-control bg-dark text-light" placeholder="" />
                    </div>

                    <div className="col-md-6 mb-3 ">
                        <label className="text-muted">D.o.B</label>
                        <input type="text" className="form-control bg-dark text-light" placeholder="" />
                    </div>

                    <div className="col-md-6 mb-3 ">
                        <label className="text-muted">Account balance</label>
                        <input type="number" className="form-control bg-dark text-light" placeholder="" />
                    </div>


                    <div className="col-md-6 mb-3 ">
                        <label className="text-muted">Pin</label>
                        <input type="text" className="form-control bg-dark text-light" placeholder="" />
                    </div>

                    <div className="col-md-6 mb-3 ">
                        <label className="text-muted">Password</label>
                        <input type="text" className="form-control bg-dark text-light" placeholder="" />
                    </div>


                </div>
                <button type="submit" className="btn bg-blue"><i className="fa fa-wrench"></i> UpDate</button>
            </form>
        </div>
    )

    return (
        <div>
            <Layout>
                <div className="row">

                    <EditUser />

                    <br />
                    <br />
                    <br />

                    <div className="col-md-11  shadow rounded m-auto p-3">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h6 className="text-light" style={{ fontSize: '15px' }}>Members</h6>
                            <button className="btn bg-blue btn-sm">
                                <i className="fa fa-plus text-white"></i> Create User
                            </button>
                        </div>
                        <div className="table-responsive bg-dark">
                            <table className="table table-hover table-striped">
                                <tbody>
                                    <tr>
                                        <td><small>userid</small></td>
                                        <td><small>Full Name</small></td>
                                        <td><small>Email</small></td>
                                        <td><small>Address</small></td>
                                        <td><small>State</small></td>
                                        <td><small>Country</small></td>
                                        <td><small>D.O.B</small></td>
                                        <td><small>Account Bal</small></td>
                                        <td><small>Pin</small></td>
                                        <td><small>Password</small></td>
                                        <td><small>Joined On</small></td>
                                        <td className="text-blue">Edit <i className="fa fa-edit text-blue"></i></td>
                                        <td className="text-danger">Delete <i className="fa fa-trash text-danger"></i></td>
                                    </tr>
                                    <tr>
                                        <td><small>h2gst3g3</small></td>
                                        <td><small>opana j wood</small></td>
                                        <td><small>opanawood@yahoo.com</small></td>
                                        <td><small>hello, i just made payment now</small></td>
                                        <td><small>mexico</small></td>
                                        <td><small>usa</small></td>
                                        <td><small>06/12/2021</small></td>
                                        <td><small>$10,200,200</small></td>
                                        <td><small>1021</small></td>
                                        <td><small>ema12wse</small></td>
                                        <td><small>06/12/2021</small></td>
                                        <td><Link to={`/admin/dashboard/users/12wew2ws`} className="badge badge-primary">Edit</Link></td>
                                        <td><span className="badge badge-danger">Delete</span></td>
                                    </tr>
                                    <tr>
                                        <td><small>h2gst3g3</small></td>
                                        <td><small>opana j wood</small></td>
                                        <td><small>opanawood@yahoo.com</small></td>
                                        <td><small>hello, i just made payment now</small></td>
                                        <td><small>mexico</small></td>
                                        <td><small>usa</small></td>
                                        <td><small>06/12/2021</small></td>
                                        <td><small>$10,200,200</small></td>
                                        <td><small>1021</small></td>
                                        <td><small>ema12wse</small></td>
                                        <td><small>06/12/2021</small></td>
                                        <td><Link to={`/admin/dashboard/users/12wew2ws`} className="badge badge-primary">Edit</Link></td>
                                        <td><span className="badge badge-danger">Delete</span></td>
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

export default Members
