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
