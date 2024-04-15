// DEPENDENCIES
const express = require("express");
const middleware = require("./utils/middleware");
const ProductRouter = require("./controllers/product");
const AdminRouter = require("./controllers/admin");

// APP
const app = express();

// MIDDLEWARE
middleware(app);

// ROUTERS
app.use("/products", ProductRouter);
app.use("/admin", AdminRouter);

//TEST ROUTE
app.get("/", (req, res) => {
  res.send("This server works");
});

// LISTENER
const PORT = process.env.PORT || 3075;
app.listen(PORT, () => {
  console.log(`Products showing ${PORT}`);
});
