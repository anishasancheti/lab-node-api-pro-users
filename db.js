const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://anisha:ani123@cluster0.bqpt3lv.mongodb.net/Prouser?retryWrites=true&w=majority')
    .then(ok => console.log("connected to mongodb"))
    .catch(err => console.log("mongodb connection error", err));


module.exports=mongoose 