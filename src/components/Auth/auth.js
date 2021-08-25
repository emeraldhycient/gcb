const verifyUserLogin = () => {
    let hash = sessionStorage.getItem("userhash")
    if (hash) {
        return true
    }
    return false
}

const verifyAdminLogin = () => {
    let hash = sessionStorage.getItem("adminhash");
    if (hash) {
        return true
    }
    return false
}

const logout = () => {
    if (window.confirm("are you sure you want to logout")) {
        sessionStorage.clear()
        window.location.reload();
    }
}


export {
    verifyAdminLogin,
    verifyUserLogin,
    logout
}