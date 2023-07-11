const mongoose = require("mongoose");
const { options } = require("../routes/products");

// uri ="mongodb+srv://mogalsahil2020:2J6dJlLWd1q8h1mq@cluster0.zhxjy3y.mongodb.net/Cluster0?retryWrites=true&w=majority";

const connectDB = (uri) => {
    // console.log("connect db");
    return mongoose.connect(uri, {
        useNewUrlparser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;