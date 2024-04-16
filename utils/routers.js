// DEPENDENCIES
const productController = require("../controllers/product");
const adminController = require("../controllers/admin");

// ROUTER FUNCTION 
function routers(app) {
    app.use("/products", productController);
    app.use("/admin", adminController);
}

// EXPORTS
module.exports = routers;