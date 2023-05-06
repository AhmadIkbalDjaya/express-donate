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
}