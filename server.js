const express =  require('express')
const connectDB = require("./database/db")
const morgan = require('morgan')
const dotenv = require('dotenv').config()
const userRoutes = require('./routes/userRoute')

const app = express()
connectDB()
app.use(express.json())
app.use(morgan('dev'))


// middleware
app.use('/api/users', userRoutes)

app.use('/', (req, res)=>{
    res.send("Hi...")
})

const PORT  = process.env.PORT || 8000
app.listen(PORT, ()=>console.log(`Server is Running...on ${PORT}`))