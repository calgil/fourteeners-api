const express = require('express');

const { 
    register,
     login,
     logout,
     getLoggedInUser,
     forgotPassword,
     resetPassword,
     updateDetails,
     updatePassword,
 } = require('../controllers/auth');
 
 const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.post('/forgotPassword', forgotPassword);
router.get('/me', protect, getLoggedInUser);
router.put('/updatedetails', protect, updateDetails);
router.post('/updatepassword', protect, updatePassword);
router.put('/resetpassword/:resettoken', resetPassword);


module.exports = router;