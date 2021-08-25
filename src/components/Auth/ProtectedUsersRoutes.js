import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { verifyUserLogin } from "./auth.js"

function ProtectedUsersRoutes({ component: Component, ...rest }) {
    return (
        <>
            <Route
                {...rest}
                render={(props) => {
                    if (verifyUserLogin()) {
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

export default ProtectedUsersRoutes
