module.exports = {
  index: (req, res) => {
    res.render('user/donate', {
      title: "Donasi",
      layout: "layouts/layout"
    })
  },
}