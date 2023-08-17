const express = require('express')
const app = express();


//port
const port = 120;

//server listen on port number
app.listen(port, () = => {
    console.log("app is listening at port", port)
})

const mangoose = require('mongoose');
const dbURL = 'mongodb+srv://fsaidi11528:<password>@faisalsaidi.v1tojq2.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURL).then(() => {
    console.log("connected to the cloud")
}).catch((error) => { console.log(error) })

const Schema = new mongoose.Schema({

 name: {type:String, required : true},
 email: {type:String, required : true},
 password: {type:String, required : true},
 age: {type:String, required : true},
})


User.deleteOne({email: "emaxmple@gmail.com "}).then ({
    console.log("email has been deleted")
});



User.find({email : "example@gmail.com" }).then({
    console.log("email has been read and found")

});



