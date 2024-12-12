const express=require('express')
const router=express.Router();
const {body}=require("express-validator")
const captainController=require('../controllers/captain.controller')
 const authMiddleware=require('../middlewares/auth.middleware')
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name is required'),
    body('password').isLength({min:6}).withMessage('password must be 6 character longs'),
    body('vehicle.color').isLength({min:3}).withMessage('color is required'),
    body('vehicle.vehicleType').isIn(['car','bike','auto']).withMessage('Vehicle type is invalid'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate is required'),
    body('vehicle.capacity').isInt({min:1}).withMessage('capacity is required'),
],

captainController.registerCaptain)
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password must be 6 character')
],
captainController.loginCaptain)

router.get('/captainprofile',authMiddleware.authCaptain,captainController.getCaptainProfile)
router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain)


module.exports=router;