const express = require('express')
const { userLogin, adminLogin } = require('./middleware/middleware')
const { connectMongoDb } = require('./config/mongodb')
const { UserModel } = require('./model/userModel')
const bodyParser = require('body-parser')
const PORT = 8089

connectMongoDb().then(() => {
    console.log('DB Connected Successfully!!!')
    app.listen(PORT, () => {
        console.log('Server is listening at PORT: ' + PORT)
    })
}).catch((e) => {
    console.error('DB Connection failed!!!', e)
})

const app = express()

app.use(bodyParser.json())
app.use('/admin', adminLogin)
app.use('/user', userLogin)

app.get('/', (req, res) => {
    res.send('Server is healthy and listening heartbeat...')
})

app.get('/admin/loginView', (req, res) => {
    res.json({status: 'Login Admin'})
})

app.post('/admin/createUser', async (req, res) => {
    const { firstName, lastName, emailId, password } = req.body
    const userData = new UserModel({
        firstName,
        lastName,
        emailId,
        password
    })
    try {
        const saveData = await userData.save()
        if(saveData) {
            res.send('USER-SAVED-SUCCESSFULLY')
        }
    } catch(e) {
        res.status(500).send({error: 'SAVING DATA ERROR'})
    }
})

app.get('/user/loginView', (req, res) => {
    res.json({status: 'Login User'})
})