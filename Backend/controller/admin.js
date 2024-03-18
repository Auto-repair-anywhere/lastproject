const { Professionnal } = require('../models');

const addProfessionnal = async (req, res) => {
  try {
    const { firstname, lastName, email, phonenumber, password, image, description } = req.body;
    const newProf = await Professionnal.create({
      firstname,
      lastName,
      email,
      phonenumber,
      password,
      image,
      description
    });
    res.status(201).json({ message: 'Professional added successfully', professional: newProf });
  } catch (error) {
    console.error('Error adding professional:', error);
    res.status(500).json({ message: 'Failed to add professional', error: error.message });
  }
};

module.exports = {
  addProfessionnal
};