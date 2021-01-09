const express =  require('express')
const connectDB = require("./database/db")
const morgan = require('morgan')
const dotenv = require('dotenv').config()
const userRoutes = require('./routes/userRoute')
//const path = require('path')

const app = express()
connectDB()
app.use(express.json())
app.use(morgan('dev'))


// middleware
app.use('/api/users', userRoutes)

/*if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/client/build')))
    app.get('*', (req, res)=>res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
  }else{
    app.get('/', (req, res) => {
      res.send('API is Running...');
    });
  }*/

const PORT  = process.env.PORT || 8000
app.listen(PORT, ()=>console.log(`Server is Running...on ${PORT}`))