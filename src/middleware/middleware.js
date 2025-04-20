const USER_ROLES = {
    ADMIN: 'admin',
    USER: 'user'
} 

const adminLogin = (req, res, next) => {
    const { role } = req.query
    if(role !== USER_ROLES.ADMIN) {
        console.log("Non Admin Login")
        res.status(403).send({error: 'USER-ROLE-ERROR'})
    } else {
        next()
    }
}

const userLogin = (req, res, next) => {
    const { role } = req.query
    if(role !== USER_ROLES.USER) {
        console.log("Non User Login")
        res.status(403).send({error: 'USER-ROLE-ERROR'})
    } else {
        next()
    }
}

module.exports = {
    adminLogin,
    userLogin
}