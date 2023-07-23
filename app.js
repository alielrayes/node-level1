const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
const Mydata = require("./models/mydataSchema");

app.get("/", (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});

app.get("/index.html", (req, res) => {
  res.send("<h1>  تم ارسال البيانات بنجاح </h1>")
});

mongoose
  .connect(
    "mongodb+srv://devali:Y3mkQvum8gItJ861@cluster0.5cqribi.mongodb.net/all-data?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/", (req, res) => {
  console.log(req.body);

  const mydata = new Mydata(req.body);

  mydata.save().then(() => {
    res.redirect("/index.html");
  }).catch((err) => {
    console.log(err)
  });
});
