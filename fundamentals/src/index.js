require("dotenv").config({});
const express = require("express");
const routes = require("./routes");

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () =>
  console.log("listening on port" + process.env.PORT || 3333)
);
