const mongoose = require('mongoose');

const connectDB = () => {
    return mongoose.connect("mongodb+srv://Artur:Cyn.41Ar@cluster0.ytygtvd.mongodb.net/task?retryWrites=true&w=majority&appName=Cluster0")
}

module.exports = connectDB;