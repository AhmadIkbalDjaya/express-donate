const express = require("express");
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


const adminRouter = require("./routes/AdminRoute");
const userRouter = require("./routes/UserRoute");
app.use("", adminRouter);
app.use("", userRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});
