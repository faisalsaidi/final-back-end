const express = require('express')
const mangoose = require('mongoose')
const routes = require ('./routes/home')
const cors = require('cors');
const app = express();


app.use(cors())
const port = 4000;

//server listen on port number
app.listen(port, () = => {
    console.log("app is listening at port", port)
})

const mangoose = require('mongomongodb+srv://fsaidi11528:<password>@faisalsaidi.v1tojq2.mongodb.net/?retryWrites=true&w=majorityose');
const dbURL = 'mongomongodb+srv://fsaidi11528:<password>@faisalsaidi.v1tojq2.mongodb.net/?retryWrites=true&w=majorityose';
mongoose.connect(dbURL).then(() => {
    console.log("connected to the cloud")
}).catch((error) => { console.log(error) })

//in order to let express parse JSON 
app.use(express.json())
//routes 
app.use('/api',routes)

const User = new mongoose.Schema({

 name: {type:String, required : true},
 email: {type:String, required : true},
 password: {type:String, required : true},
 age: {type:String, required : true},
})






