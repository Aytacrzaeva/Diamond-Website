const Usermodel = require('../models/Usermodels')
const jwt = require('jsonwebtoken')
const protect = async (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
        let token

        token = req.headers.authorization.split(" ")[1]

        const decoded = await jwt.verify(token,process.env.JWT_SECRET)

        req.user = await Usermodel.findById(decoded.id).select('-password')

        next()
        // Continue with the desired logic
      } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
          // Handle the specific JWT error
          console.log('JWT Error:', error.message);
          // Respond with an appropriate error message or status
          return res.status(401).json({ error: 'Invalid token' });
        } else {
          // Handle other types of errors
          console.log('Error:', error.message);
          // Respond with a generic error message or status
          return res.status(500).json({ error: 'Server error' });
        }
      }
        
    }    
}

module.exports={protect}