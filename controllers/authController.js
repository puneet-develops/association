const db=require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const AuthController = {
    async registerUser(req, res) {
      try {
        const { username, email, password } = req.body;
  
        // Check if the user already exists
        const existingUser = await db.User.findOne({ where: { email } });
        if (existingUser) {
          return res.status(400).json({ error: 'User already exists' });
        }
  
        // Hash the password
        // const saltRounds = 10;
        // const hashedPassword = await bcrypt.hash(password, saltRounds);
  
        // Create a new user
        const newUser = await db.User.create({ username, email,password});// password: hashedPassword });
  
        // Create and sign a JWT token
        const token = jwt.sign(
          { user: { userId: newUser.user_id, username: newUser.username, roles: newUser.role } },
          process.env.JWT_SECRET,
          {
            expiresIn: '1h', // Token expiration time
          }
        );
  
        res.json({ token });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    },
  
    async signInUser(req, res) {
      try {
        const { email, password } = req.body;
  
        // Check if the user exists
        const user = await db.User.findOne({ where: { email } });
        if (!user) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
  
        // Verify the password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
  
        // Create and sign a JWT token
        const token = jwt.sign(
          { user: { userId: user.user_id, username: user.username, roles: user.role } },
          process.env.JWT_SECRET,
          {
            expiresIn: '1h', // Token expiration time
          }
        );
  
        res.json({ token });    
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    },
  };
  
  module.exports = AuthController;