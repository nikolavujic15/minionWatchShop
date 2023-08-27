import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to ${conn.connection.host} `)


    } catch(error){

    }
}

export default connectDB