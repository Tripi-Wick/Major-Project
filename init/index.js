const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = "mongodb+srv://kimmu1370:TdhtQEDHulkpxlSQZ@cluster0.th74p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

async function main() {
    await mongoose.connect(dbUrl);
}

main()
    .then(()=>{
        console.log("Connected to DB")
    })
    .catch((err)=>{
        console.log(err);
    });

const initDB = async() =>{
    // await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj,owner:"673ced9a433bf28e32a2607d"}))
    await Listing.insertMany(initData.data)
    console.log("Data was initialized");
}

initDB();