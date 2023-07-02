const Usermodel = require('../models/Usermodels')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
  })
}
const RegisterUser = async (req, res) => {
  const { firstname,lastname, email,number, password,isAdmin,address,postcode,city,country,region} = req.body
  const Userexists = await Usermodel.findOne({ email })
  if (Userexists) {
      return res.status(404).json({ message: 'Email already exists' })
  }

  const salt = await bcrypt.genSalt(10)
  const hashed = await bcrypt.hash(password, salt)

  const newUser = await Usermodel.create({
      firstname,
      lastname,
      email,
      number,
      password: hashed,
      address,
      postcode,
      city,
      country,
      region,
      isAdmin
  })

  if (newUser) {
      return res.status(200).json({
        _id: user._id,
        firstname:user.firstname,
        lastname:user.lastname,
        email: user.email,
        number:user.number,
        password: user.password,
        address:user.address,
        postcode:user.postcode,
        city:user.city,
        country:user.country,
        region:user.region,
        token: generateToken(user.id),
        isAdmin:user.isAdmin
      })
  }
  else {
      return res.status(401).json({ message: 'Invalid User data' })
  }
}

const LoginUser = async (req, res) => {
  const { firstname,lastname,email, password,isAdmin } = req.body;

  const user = await Usermodel.findOne({ email })

  if (user && await bcrypt.compare(password, user.password)) {
      res.status(200).json({
          _id: user.id,
          firstname:user.firstname,
          lastname:user.lastname,
          email: user.email,
          password: user.password,
          token: generateToken(user.id),
          isAdmin:user.isAdmin
      })
  }
  else {
      res.status(404).json({ message: 'Invalid User data' })
  }
}

const getMe = async (req, res) => {
  await res.status(200).send(req.user)
}

const getAll= async(req,res)=>{
    try {
        const products = await Usermodel.find();
        res.send(products);
      } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while retrieving products.');
}
}
module.exports = { RegisterUser,LoginUser,getMe,getAll };
