const Donation = require('../../models/donation');

module.exports = {
  index: async(req, res) => {
    try {
      const donations = await Donation.find({status: "Berlansung"}).lean();
      res.render('user/dashboard', {
        title: "ReDonate",
        layout: "layouts/layout",
        donations,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },
}