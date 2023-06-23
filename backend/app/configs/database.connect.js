const mongoose = require("mongoose");
const MongooseConnect =
    "mongodb+srv://AytacRzayeva:Aytac123@cluster0.xz3ku7i.mongodb.net/";

const connect = mongoose.connect(MongooseConnect).then((res) => {
    console.log("DB CONNECTED");
});

module.exports=connect