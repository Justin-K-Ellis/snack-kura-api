const express = require("express");
const router = express.Router();

const makerController = require("./controllers/makerController.js");
const productController = require("./controllers/productController.js");
const categoryController = require("./controllers/categoryController.js");

router.get("/router-test", (req, res) => {
  res.json("Router test");
});

// Makers
router.get("/all-makers", makerController.getAllMakers);
router.get("/maker/:id", makerController.getMakerById);
router.post("/maker", makerController.postMaker);
router.put("/maker", makerController.updateMakerName);
router.delete("/maker", makerController.deleteMaker);

// Product
router.get("/all-products", productController.getAllProducts);
router.post("/product", productController.createProduct);

// Category
router.get("/all-categories", categoryController.getAllCategories);
router.post("/category", categoryController.createCategory);

module.exports = router;
