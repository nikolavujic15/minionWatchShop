import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan';
import { connect } from 'mongoose';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import productRoute from './routes/productRoute.js'
import cors from 'cors'
import path, { join } from 'path'

dotenv.config();

//database 
connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('/api/v1/auth', authRoutes);
app.use("/api/v1/category", categoryRoute)
app.use("/api/v1/product", productRoute);

app.get('/', (req,res)=>{
    res.send('<h1>Welcome</h1>')
})

//rest api 


const PORT = process.env.PORT || 8080;

app.listen (PORT , ()=>{
    console.log(`Server Runing on ${process.env.DEV_MODE} on ${PORT}`)
})