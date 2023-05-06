module.exports = {
  index: (req, res) => {
    res.render('admin/user', {
      title: "User",
      layout: "layouts/layout"
    })
  },
}