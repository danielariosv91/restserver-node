import mongoose from 'mongoose'

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_ATLAS); 

        console.log("Database online");
    } catch (error) {
        console.log(error)
        throw new Error('Database Error');
    }
}

export {
    dbConnection
}