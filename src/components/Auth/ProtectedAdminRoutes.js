import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { verifyAdminLogin } from "./auth.js"

function ProtectedAdminRoutes({ component: Component, ...rest }) {
    return (
        <>
            <Route
                {...rest}
                render={(props) => {
                    if (verifyAdminLogin()) {
                        return <Component  {...props} />
                    } else {
                        return <Redirect to={{
                            pathname: "/login", state: { from: props.location }
                        }} />
                    }
                }}
            />
        </>
    )
}

export default ProtectedAdminRoutes
