const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');

const router = express.Router();

// GET /users/:id
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  // Check if the ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  try {
    // Query user by _id and ensure age > 21
    const user = await User.findOne({
      _id: id,
      age: { $gt: 21 }, // Unique twist: only return users over 21
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found or age ≤ 21' });
    }

    // Return user details
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      age: user.age,
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;