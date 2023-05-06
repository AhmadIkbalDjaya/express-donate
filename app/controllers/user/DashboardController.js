module.exports = {
  index: (req, res) => {
    res.render('user/dashboard', {
      title: "ReDonate",
      layout: "layouts/layout"
    })
  },
}