import React from 'react'

import Layout from './Layout'

function Messages() {
    return (
        <div>
            <Layout>
                <div className="col-md-10  card rounded m-auto p-3">
                    <div className="mb-4">
                        <h6 className="text-dark" style={{ fontSize: '15px' }}>Messages</h6>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover table-striped">
                            <tbody>
                                <tr>
                                    <td className="text-dark">From</td>
                                    <td className="text-dark">Email</td>
                                    <td className="text-dark">Message</td>
                                    <td className="text-dark">sent on</td>
                                </tr>
                                <tr>
                                    <td>opana j wood</td>
                                    <td>opanawood@yahoo.com</td>
                                    <td><h6>hello, i just made payment now</h6></td>
                                    <td>06/21</td>
                                </tr>
                                <tr>
                                    <td>opana j smooth</td>
                                    <td>opanaj@gmail.com</td>
                                    <td><h6>hello, i just made payment now</h6></td>
                                    <td>06/21</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Messages
