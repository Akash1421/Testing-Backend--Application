import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username:{
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        minLength : 1,
        maxLength : 100
    },
    password: {
        type : String,
        required : true,
        minLength : 6,
        maxLength : 40
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true
    }
},
    {
        timestamps : true
    }
)

export const User = mongoose.model("User", userSchema);