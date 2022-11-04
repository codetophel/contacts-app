const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const { body, validationResult } = require('express-validator');

const User = require('../models/User');

//@route POST api/users
//@desc Register a user
//@access Public
router.post(
  '/',
  [
    body('name', 'Please, add name').not().isEmpty(),
    body('email', 'Please, inlude a valid email').isEmail(),
    body(
      'password',
      'Please, enter a password with six or more characters'
    ).isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    //using email to check if user already exists
    try {
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      //save new user to the database
      await user.save();

      //assigning a token to each new user
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
