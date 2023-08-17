var express = require('express');
var path = require('path');
var bodyParser = require('body-parser'); var app = express();
var mongoose = require('mongoose'); mongoose.connect('mongodb://localhost/test');

var publicFolder = path.join(__dirname, 'public');

app.use(express.static (publicFolder));
app.use(bodyParser.urlencoded({ extended: true }))

var User = mongoose.model('User', {name: String, age: Number});

app.get('', (req, res) =>{
    res.render(publicFolder + '/sign up.html');
})

app.post('/user', (req, res) =>{
                                        //id of input           //id of input
    var user = new User({name: req.body.username, age: req.body.age});

    user.save().then(newUser => {
        res.send("creaetd new user successfully!");
    }).catch(err => {
        res.send("something went wrong!");
    })
    User.deleteOne({email: "emaxmple@gmail.com "}).then ({
        console.log("email has been deleted")
    });
    
    
    
    User.find({email : "example@gmail.com" }).then({
        console.log("email has been read and found")
    
    });
    
})
