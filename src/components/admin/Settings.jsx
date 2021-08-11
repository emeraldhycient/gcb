import React from 'react'
import Layout from './Layout'

function Setting() {
    return (
        <div>
            <Layout>
                <h4 className="mx-5 my-4 text-blue">Edit Settings</h4>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10  rounded pt-3 m-auto shadow">

                            <h4 className="my-3 text-blue">Security</h4>
                            <form action="" className="form-group">
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="" className="form-label text-muted">Email</label>
                                        <input type="Email" name="" id="" className="form-control form-control-lg bg-dark" />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="" className="form-label text-muted">New Password</label>
                                        <input type="password" name="" id="" className="form-control form-control-lg bg-dark" />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="" className="form-label text-muted">Confirm Password</label>
                                        <input type="password" name="" id="" className="form-control form-control-lg bg-dark" />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="" className="form-label text-muted">old Password</label>
                                        <input type="password" name="" id="" className="form-control form-control-lg bg-dark" />
                                    </div>
                                </div>
                                <button type="submit" className="btn bg-blue btn-lg float-right mb-3"> <i className="fa fa-wrench"></i> Change Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Setting
