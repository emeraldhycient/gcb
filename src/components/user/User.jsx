import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import Layout from './Layout'
import Cardmaker from '../cardmaker/Cardmaker'
import DoughnutChart from '../Charts/Doughnut '
import Modal from '../common/Modal/Modal'

function User() {
    const [cvc, setcvc] = useState('231')
    const [expiry, setexpiry] = useState('12/22')
    const [focus, setfocus] = useState('number')
    const [name, setname] = useState('emma emeka')
    const [number, setnumber] = useState('5110 1212 2323 3454')


    const amount = 685234

    const modalid = "transfer"

    const Transfercomp = () => (
        <form className="form-group">
            <label htmlFor="">Account Number</label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">#</span>
                </div>
                <input type="text" class="form-control" placeholder="account number" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <label htmlFor="">Routing Number</label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">#</span>
                </div>
                <input type="text" class="form-control" placeholder="routing number" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <label htmlFor="">Account Name</label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1"><i className="fa fa-user"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="Account Name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <label htmlFor="">Amount</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                </div>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                </div>
            </div>
            <label htmlFor="">Pin</label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">#</span>
                </div>
                <input type="text" class="form-control" placeholder="pin" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <button type="submit" className="btn btn-primary mt-2 float-right"><i className="fa fa-paper-plane"></i> Transfer</button>
        </form>

    )

    return (
        <div>
            <Layout>
                <div className="row">
                    <div className="col-md-7 shadow rounded mb-3">
                        <div className="container p-3">
                            <div className="row">
                                <div className="col-md-8">
                                    <h6 className="text-muted" style={{ color: '#cacaca', fontSize: '12px' }}>Main Account</h6>
                                    <div className="">
                                        <h5 className="text-light mt-3 mb-0">Emeka Emmanuel</h5>
                                        <small className="text-muted">0123456789</small>
                                    </div>
                                    <div className="d-flex justify-content-evenly mt-4">
                                        <div className="d-flex justify-content-evenly mr-3">
                                            <div className="mt-2">
                                                <span className="iconshadow bg-info mr-1"><i className="fa fa-arrow-down text-light"></i></span>
                                            </div>
                                            <div className="">
                                                <h6 className="text-blue ml-1">{amount.toLocaleString()}</h6>
                                                <small className="text-muted">Income</small>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-evenly">
                                            <div className="mt-2">
                                                <span className="iconshadow bg-info mr-1"><i className="fa fa-arrow-up text-warning"></i></span>
                                            </div>
                                            <div className="">
                                                <h6 className="text-blue ml-1">{amount.toLocaleString()}</h6>
                                                <small className="text-muted">Expenses</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1 mb-5"></div>
                                <div className="col-md-3">
                                    <h6 className="text-muted" style={{ color: '#cacaca', fontSize: '12px' }}>Available Fund</h6>
                                    <h3 className="mt-3 text-blue"> {amount.toLocaleString()}</h3>
                                    <button className="btn mt-4 bg-blue" data-toggle="modal" data-target={`#${modalid}`}><i className="fa fa-share-alt-square mr-1"></i> Transfer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal title="transfer fund" id={modalid} Data={Transfercomp} />
                    <div className="col-md-1"></div>
                    <div className="col-md-4 pl-0 mb-3">
                        <Cardmaker cvc={cvc} expiry={expiry} focus={focus} name={name} number={number} />
                    </div>
                </div>
                <div className="row">
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

export default User
