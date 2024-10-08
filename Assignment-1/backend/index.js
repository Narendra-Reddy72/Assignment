const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  };

app.use(cors(corsOptions))

app.use(express.json());

const mongourl = "mongodb+srv://Assignment:Assignment@assignment.kyjjcmg.mongodb.net/?retryWrites=true&w=majority&appName=Assignment";

mongoose.connect(mongourl,{});

mongoose.connection.on('connected',()=>{
    console.log('MongoDB is connected successfully');
});

const eventRoutes = require('./routes/eventRoutes')
app.use('/api',eventRoutes);

const port =4580;

app.listen(port,()=>{
    console.log(`my server is running on ${port}`);
})