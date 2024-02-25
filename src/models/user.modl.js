import mongoose from 'mongoose'

const contectShema = new mongoose.Schema({
    firstNAme:{
        type:String,
        required:[true,"Please enter your first name"],
        minLength:[4,'Enter a valid name that minimum 4 characters'],
        maxLangth:[50,'Please enter a valid name']
    },
    lastNAme:{
        type:String,
        required:[true,"Please enter your first name"],
        minLength:[4,'Enter a valid name that minimum 4 characters'],
        maxLangth:[50,'Please enter a valid name']
    },
    email:{
        type:String,
        required:[true,'Please enter a email'],
        unique:true,
    },
    message:{
        type:String,
        required:[true,'enter a message']
    },
    date:{
        type:Date,
        default:Date.now
    }
});
const Friend = mongoose.model.friends  || mongoose.model("friends",contectShema);
export default Friend;