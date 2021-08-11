import React from 'react'

import Layout from './Layout'

function Transfers() {
    return (
        <div>
            <Layout>
                <div className="col-md-10 shadow rounded m-auto p-3">
                    <div className="mb-4">
                        <h6 className="text-light" style={{ fontSize: '15px' }}>All transactions</h6>
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
                                <td>Transfer</td>
                                <td><small className="badge badge-danger">Debit</small></td>
                                <td>$ -15000</td>
                                <td>06/21</td>
                            </tr>
                            <tr>
                                <td>Transfer</td>
                                <td><small className="badge badge-danger">Debit</small></td>
                                <td>$ -15000</td>
                                <td>06/21</td>
                            </tr>
                            <tr>
                                <td>Transfer</td>
                                <td><small className="badge badge-danger">Debit</small></td>
                                <td>$ -15000</td>
                                <td>06/21</td>
                            </tr>
                            <tr>
                                <td>Transfer</td>
                                <td><small className="badge badge-danger">Debit</small></td>
                                <td>$ +15000</td>
                                <td>06/21</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Transfers
