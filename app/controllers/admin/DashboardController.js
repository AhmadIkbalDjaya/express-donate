module.exports = {
  index: (req, res) => {
    res.render('admin/dashboard', {
      title: "Admin",
      layout: "layouts/layout"
    })
  },
}