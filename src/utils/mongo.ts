import mongoose from "mongoose";
import config from "config";

export async function connection() {
    try{
        console.log("connecting")
        await mongoose.connect(config.get('dbUri'));
        console.log("connected ...");
    }
    catch(err){
        console.log("error")
        console.log(err);
        process.exit(1);
    }
}

