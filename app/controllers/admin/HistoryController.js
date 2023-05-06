module.exports = {
  index: (req, res) => {
    res.render('admin/history', {
      title: "History",
      layout: "layouts/layout"
    })
  },
}