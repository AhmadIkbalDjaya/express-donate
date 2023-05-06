module.exports = {
  index: (req, res) => {
    // res.send("admin Dashboar")
    res.render('admin/dashboard', {
      title: "Admin",
      layout: "layouts/layout"
    })
  },
  history: (req, res) => {
    res.send("admin history")
  },
  konfirmasi: (req, res) => {
    res.send("admin konfirmasi")
  },
  user: (req, res) => {
    res.send("admin user")
  },
}