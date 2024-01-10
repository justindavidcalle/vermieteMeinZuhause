const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())

mongoose.connect('mongodb+srv://justincalle18:05strEEt20@vermietemeinzuhausedb.fctuffp.mongodb.net/vermieteMeinZuhause')
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Database connected'))

app.use(express.json())

const userRouter = require('./router/userRouter')
app.use('/user', userRouter)
const stripeRouter = require('./router/stripeRouter')
app.use('/stripe', stripeRouter)


app.listen(3000, () => console.log('Server runs on 3000'))