module.exports = {
  index: (req, res) => {
    res.render('user/message', {
      title: "Pesan",
      layout: "layouts/layout"
    })
  },
}