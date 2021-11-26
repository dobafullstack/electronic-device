import mongoose from 'mongoose'
import Logger from './Logger'

const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URL as string)
        .then(() => {
            Logger.success('Connect MongoDB successfully');
        }).catch((err: any) => Logger.error(err.message))
}

export default connectDB
