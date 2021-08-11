import React from 'react'
import Layout from './Layout'

function Loan() {
    return (
        <div>
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 card p-5 m-5">
                            <h4>No Loan applications available.</h4>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Loan
