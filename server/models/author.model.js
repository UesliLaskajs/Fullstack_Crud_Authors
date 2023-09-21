const mongoose=require('mongoose');

const authorSchema=new mongoose.Schema({
    name:{
        type:String,
        required: [
            true,
            "Name is required"
        ],
        minlength: [3, 'Must be at least 3 characters'] 
    }
},{timestamps:true})

module.exports=mongoose.model('author',authorSchema)





    

