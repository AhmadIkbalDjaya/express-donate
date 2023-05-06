module.exports = {
  index: (req, res) => {
    res.render('user/history', {
      title: "Riwayat Donasi",
      layout: "layouts/layout"
    })
  },
}