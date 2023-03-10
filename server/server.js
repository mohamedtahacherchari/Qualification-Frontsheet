//import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import connectDB from './config/db.js'
import premiercontactRoutes from './routes/premiercontactRoutes.js'


dotenv.config()  

connectDB()

const app = express()




if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))

}

app.use(express.json())

app.use('/api/premiercontacts', premiercontactRoutes)




  


const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)