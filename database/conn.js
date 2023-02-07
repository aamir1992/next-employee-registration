import mongoose from 'mongoose';

const connectMongo = async () => {
    try{

        const { connection }  = await mongoose.connect('mongodb+srv://aamirRage:rt4zlDVJHGXIpLqU@rage.ry9pozt.mongodb.net/?retryWrites=true&w=majority')

        if(connection.readyState == 1){
            console.log("Database Connected")
        }

    }catch(errors){
        return Promise.reject(errors)
    }
}

export default connectMongo;