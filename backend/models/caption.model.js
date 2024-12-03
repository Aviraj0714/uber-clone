const mongoose=require('mongoose')
const bcrypt= require('bcrypt')
const jwt=require('jsonwebtoken')
const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'email must be at least 5 characters long'],
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',  // Corrected here
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'color must be at least 3 character long']
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'capacity must be at least 1']
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, 'plate must be at least 3 character long']
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'bike', 'auto']
        },
        location: {
            lat: {
                type: Number
            },
            lng: {
                type: Number
            }
        }
    }
});

captainSchema.methods.genrateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token;
}

captainSchema.methods.comparePassword=async function(password) {
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword=async function(password) {
    return await bcrypt.hash(password,10);
}

const captainModel=mongoose.model('captain',captainSchema);

module.exports=captainModel;



