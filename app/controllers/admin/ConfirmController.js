module.exports = {
  index: (req, res) => {
    res.render('admin/confirm', {
      title: "Konfirmasi",
      layout: "layouts/layout"
    })
  },
}