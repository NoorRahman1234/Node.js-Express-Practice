import mongoose  from "mongoose";

const dbconnection=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('db connetion connect successfullay')
        
    } catch (error) {
        console.log ('db connetion falied');
        
    }
}
export default dbconnection;