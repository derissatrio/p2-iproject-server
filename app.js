const express = require("express");
const app = express()
const port = process.env.PORT || 2000
const cors = require('cors')
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("helloworld");
});

app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log('Aplikasi Berjalan');
})