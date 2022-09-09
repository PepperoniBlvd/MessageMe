import mongoose from "mongoose";

const messagemeSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
});


export default mongoose.model('messagecontent', messagemeSchema)