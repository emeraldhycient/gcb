import React from 'react'
import Layout from './Layout'

function Settings() {
    return (
        <div>
            <Layout>
                <h4 className="mx-5 my-4 text-blue">Edit Profile and Settings</h4>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10  rounded pt-3 m-auto shadow">
                            <h4 className="text-blue">Profile</h4>
                            <form action="" className="form-group">
                                <div className="row pt-3">
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="" className="form-label text-muted">Username</label>
                                        <input type="text" name="" id="" className="form-control form-control-lg bg-dark" />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="" className="form-label text-muted">Full Name</label>
                                        <input type="text" name="" id="" className="form-control form-control-lg bg-dark" />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="" className="form-label text-muted">Email Address</label>
                                        <input type="text" name="" id="" className="form-control form-control-lg bg-dark" />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="" className="form-label text-muted">Country</label>
                                        <input type="text" name="" id="" className="form-control form-control-lg bg-dark" />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="" className="form-label text-muted">State</label>
                                        <input type="text" name="" id="" className="form-control form-control-lg bg-dark" />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="" className="form-label text-muted">Address</label>
                                        <input type="text" name="" id="" className="form-control form-control-lg bg-dark" />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="" className="form-label text-muted">Date of Birth</label>
                                        <input type="date" name="" id="" className="form-control form-control-lg bg-dark" />
                                    </div>
                                    <div className="col-md-6 mb-4 mt-4">
                                        <button type="submit" className="btn bg-blue btn-lg float-right"><i className="fa fa-wrench"></i> Update Information</button>
                                    </div>
                                </div>
                            </form>
                            <h4 className="my-3 text-blue">Security</h4>
                            <form action="" className="form-group">
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="" className="form-label text-muted">New Password</label>
                                        <input type="password" name="" id="" className="form-control form-control-lg bg-dark" />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="" className="form-label text-muted">Confirm Password</label>
                                        <input type="password" name="" id="" className="form-control form-control-lg bg-dark" />
                                    </div>
                                    <div className="col-md-8 mb-4">
                                        <label htmlFor="" className="form-label text-muted">old Password</label>
                                        <input type="password" name="" id="" className="form-control form-control-lg bg-dark" />
                                    </div>
                                    <div className="col-md-4 mb-4 mt-4">
                                        <button type="submit" className="btn bg-blue btn-lg float-right"> <i className="fa fa-wrench"></i> Change Password</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Settings
