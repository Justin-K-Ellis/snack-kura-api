const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// GET
async function getAllProducts(req, res) {
  try {
    const allProducts = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        quantity: true,
        category: true,
        maker: true,
      },
    });
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ message: `Failed to get all products: ${error}` });
  }
}

async function getProductById(req, res) {
  try {
    let { id } = req.params;
    id = parseInt(id);
    const product = await prisma.product.findUnique({
      where: { id },
    });
    console.log("Product:", product);
    if (!product) {
      res.status(404).json({ message: "This product does not exist." });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ message: `Failed to get product by ID: ${error}` });
  }
}

// POST
async function createProduct(req, res) {
  const { name, quantity, categoryId, makerId } = req.body;
  try {
    const product = await prisma.product.create({
      data: {
        name,
        quantity,
        categoryId,
        makerId,
      },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong (failed to create product). " + error,
    });
  }
}

module.exports = { getAllProducts, getProductById, createProduct };
