const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const usersRouter = require("./routes/v1/users.route");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.use(usersRouter);

app.all("*", (req, res) => {
  res.send("no route found please enter { api/v1/user/***} this route");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log("server is running", port);
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
