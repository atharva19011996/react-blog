const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://atharva__19:$Atharva2022@react-blog-837hs.mongodb.net/test?retryWrites=true&w=majority?authSource=yourDB&w=1",
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));
app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(5000);
