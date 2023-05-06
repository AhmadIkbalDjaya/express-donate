const express = require("express");
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


const adminRouter = require("./routes/AdminRoute");
app.use("/admin", adminRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});