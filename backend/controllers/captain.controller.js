const BlacklistToken = require("../models/blacklistToken");
const captainModel = require("../models/caption.model");
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    // Check if the captain already exists
    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: "Captain already exists" });
    }

    // Hash the password
    const hashedPassword = await captainService.hashPassword(password);

    // Create captain
    const captain = await captainModel.create({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname,
        },
        email,
        password: hashedPassword,
        vehicle: {
            color: vehicle.color,
            capacity: vehicle.capacity,
            plate: vehicle.plate,
            vehicleType: vehicle.vehicleType,
        },
    });

    // Generate authentication token
    const token = captain.genrateAuthToken();

    // Return response
    res.status(201).json({ token, captain });
};


module.exports.loginCaptain=async(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
}
const {email,password}=req.body;
const captain=await captainModel.findOne({email}).select('+password');
if(!captain) {return res.status(400).json({message:"Invalid email or password"}
)}

const isMatch=await captain.comparePassword(password);
if(!isMatch){ return res.status(400).json({message:"Invalid email or password"
});
}
const token=captain.genrateAuthToken();
res.cookie('token',token)
res.status(200).json({token,captain});
}

module.exports.logoutCaptain=async (req,res,next) => {
    const token =req.cookies.token||req.headers.authorization?.split('')[1];
    await BlacklistToken.create({token});
    res.clearCookie('token');
    res.status(200).json({ message: "Logged out successfully" });
    };

    module.exports.getCaptainProfile=async (req,res,next) => {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Please login to access this resource" });
            }
            const captain = await captainModel.findById(req.captain._id).select('-password');
            res.status(200).json({ captain });
            };

        
    

    