import React from 'react'
import { Link } from 'react-router-dom'

function News() {
    return (
        <section className="" style={{ marginTop: '80px', marginBottom: '200px' }}>
            <div className="text-center pt-3 mt-3 mb-5">
                <h2 className="h2 my-5">LATEST NEWS</h2>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 bg-light mb-4">
                        <div className="card">
                            <div className="card-body p-0">
                            <img src="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=691&q=80" alt="" className="rounded  w-100" />
                                <h5 className="mt-3 px-3 w-100">Why Savings is very crucial For Someone That Plans To Retire.</h5>
                                <h6 className="p my-4 mx-2 text-muted">First and foremost, saving money is important because it helps protect you in the event of a financial emergency. Additionally, saving money can help you pay for large purchases, avoid debt, reduce your financial stress, leave a financial legacy, and provide you with a greater sense of financial freedom...</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 bg-light mb-4">
                        <div className="card">
                            <div className="card-body p-0">
                                <img src="https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" className="rounded  w-100" />
                                <h5 className="mt-3 px-3 w-100">7 Habits To Avoid If You Want To save Money.</h5>
                                <h6 className="p my-4 mx-2 text-muted">Habits are the regular tendencies we have that are hard to break. They are the things we do over and over without even thinking about. Our habits shape our lives – both for the good and the bad.
                                    No matter what area of your life you’re trying to improve there needs to be a sharp focus on breaking bad habits and forming good ones...</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 bg-light mb-4">
                        <div className="card">
                            <div className="card-body p-0">
                                <img src="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=691&q=80" alt="" className="rounded  w-100" />
                                <h5 className="mt-3 px-3 w-100">Reasons to start saving in cryptocurrency.</h5>
                                <h6 className="p my-4 mx-2 text-muted">Cryptocurrency and blockchain technology have taken the whole world by storm, so it’s no surprise that more and more people are turning to crypto investing.

                                    There are various reasons why people invest in cryptos to meet their financial goals.

                                    However, there are those that invest in the crypto market for the wrong reasons...</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className="btn dashboard my-2 my-sm-0 text-dark"><Link to="/create" className="text-decoration-none text-dark">GET AN ACCOUNT TODAY</Link></button>
            </div>
        </section>
    )
}

export default News
