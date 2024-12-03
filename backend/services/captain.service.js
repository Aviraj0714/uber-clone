const captainModel=require('../models/caption.model');
// captainService.js
const bcrypt = require('bcrypt');

// Function to hash passwords
const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

// Export the function
module.exports = {
    hashPassword,
};

module.exports.createCaptain=async({
    firstname,lastname,email,password,color,plate,capacity,vehicleType
})=>{
    if(!firstname||!email||!password||!color||!plate||!vehicleType||!capacity){
        throw new Error('All Fields Are Required');
    }
    const captain=captainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            vehicleType,
            capacity
        }
    })
    return captain;
}
