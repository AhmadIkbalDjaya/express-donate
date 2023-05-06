const Donation = require('../../models/donation');

module.exports = {
  index: async (req, res) => {
    try {
      const donations = await Donation.find({is_accept: "Pending"});
      res.render('admin/confirm', {
        title: "Konfirmasi",
        layout: "layouts/layout",
        donations: donations,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Terjadi kesalahan dalam memuat data donasi");
    }
  },
}