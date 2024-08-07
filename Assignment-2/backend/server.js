const app = require('./app');

require('dotenv').config();

const port = process.env.PORT || 4800;

app.listen(port,()=>{
    try{
        console.log(`my server is running on ${port}`)
    }catch(err){
        console.log(`my server is not running on ${port}`)
    }
})