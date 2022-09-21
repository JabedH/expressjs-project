const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.use(errorHandler);
app.get(req, (res) => {
  req.send("tunning");
});

app.listen(port, () => {
  console.log("server is running", port);
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
