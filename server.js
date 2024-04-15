// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 3075;
const ProductRouter = require("./controllers/product");
const AdminRouter = require("./controllers/admin")

// APP
const app = express();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// ROUTERS
app.use("/products", ProductRouter);
app.use("/admin", AdminRouter);

//TEST ROUTE
app.get("/", (req, res) => {
  res.send("This server works");
});

// LISTENER
app.listen(PORT, () => {
  console.log(`Products showing ${PORT}`);
});
