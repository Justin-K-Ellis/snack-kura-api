const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// GET
async function getAllProducts(req, res) {
  try {
    const allProducts = await prisma.product.findMany({
      select: {
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

module.exports = { getAllProducts, createProduct };
