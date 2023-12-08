const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://justincalle18:05strEEt20@vermietemeinzuhausedb.fctuffp.mongodb.net/vermieteMeinZuhause')
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Database connected'))

app.use(express.json())

const userRouter = require('./router/userRouter')
app.use('/user',userRouter)


app.listen(3000, () => console.log('Server runs on 3000'))