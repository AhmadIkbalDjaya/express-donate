const User = require('../../models/user');

module.exports = {
  index: async (req, res) => {
    try {
      const users = await User.find();
      res.render('admin/user', {
        title: "User",
        layout: "layouts/layout",
        users: users,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("Terjadi kesalahan dalam memuat data pengguna");
    }
  },

  // Edit User
  editUser: async (req, res) => {
    const userId = req.params.id;
    const { name, username, level } = req.body;

    try {
      // Find the user and update the details
      await User.findByIdAndUpdate(userId, { name, username, level });

      res.redirect('/admin/user');
    } catch (err) {
      console.error(err);
      res.redirect('/admin/user');
    }
  },

  // Delete User
  deleteUser: async (req, res) => {
    const userId = req.params.id;

    try {
      // Find and delete the user
      await User.findByIdAndDelete(userId);

      res.redirect('/admin/user');
    } catch (err) {
      console.error(err);
      res.redirect('/admin/user');
    }
  },
}