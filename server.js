const express = require("express");
const paintingRoutes = require("./src/painting/routes");
require("dotenv").config();
const ErrorHandler = require("./src/middleware/errorHandler");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/mongo");
const logger = require("./src/middleware/logger");
const { model } = require("mongoose");
const app = express();
app.use(cookieParser());
connectDB();
app.use(logger);
app.use(ErrorHandler);

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/paintings", paintingRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));
