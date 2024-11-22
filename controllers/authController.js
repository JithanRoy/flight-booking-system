
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    console.log('Register route hit');


    if (!['admin', 'user'].includes(role)) {
      return res.status(400).json({ error: 'Invalid role. Role must be either "admin" or "user".' });
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    const user = new User({ username, email, password: hashedPassword, role });

    await user.save();

    res.status(201).json({ message: 'User registered successfully', user: { username, email, role } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};