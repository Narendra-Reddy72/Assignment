const { default: mongoose } = require("mongoose");


const connectDB = async()=>{
    
        const MONGO_URI = "mongodb+srv://Assignment-2:Assignment-2@cluster0.huff7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        await mongoose.connect(MONGO_URI,{});
    }
mongoose.connection.on('connected',()=>{
    try{
        console.log('Database connected')
    }catch(err){
        console.log('Database is not connected')
    }
})

module.exports = connectDB;