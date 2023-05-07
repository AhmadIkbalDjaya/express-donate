const User = require('../models/user');

module.exports = {
  login: async (req, res) => {
    try {
      res.render('login', {
        title: "Login",
        layout: false
      });
    } catch (err) {
      console.error(err)
      res.status(500).send('Internal Server Error');
    }
  },

  loginProcess: async (req, res) => {

  },

  // logout: async (req, res) => {

  // },

  registration: async (req, res) => {
    try {
      res.render('registration', {
        title: "Registrasi",
        layout: false
      });
    } catch (err) {
      console.error(err)
      res.status(500).send('Internal Server Error');
    }
  },

  registrationProcess: async (req, res) => {
    const { username, email, password } = req.body;

    try {
      // Periksa apakah username atau email sudah digunakan sebelumnya
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        // return res.status(400).json({ message: 'Username atau email sudah digunakan' });
      res.status(500).send('Internal Server Error');
      }

      // Buat objek user baru
      const newUser = new User({
        username,
        email,
        password,
        level: "User",
      });

      // Simpan user ke dalam database
      await newUser.save();

      // res.status(201).json({ message: 'Registrasi berhasil' });
      res.redirect('/login')
    } catch (err) {
      console.error(err);
      // res.status(500).json({ message: 'Terjadi kesalahan saat mendaftar' });
      res.status(500).send('Internal Server Error');
    }
  },

  
}