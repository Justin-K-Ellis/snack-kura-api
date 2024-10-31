const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// GET
async function getAllCategories(req, res) {
  try {
    const allCategories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
        products: true,
      },
    });
    res.json(allCategories);
  } catch (error) {
    req.status(500).json({ message: `Failed to get all categories: ${error}` });
  }
}

// POST
async function createCategory(req, res) {
  const { name } = req.body;
  try {
    const category = await prisma.category.create({
      data: {
        name,
      },
    });
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: `Failed to create category: ${error}` });
  }
}

module.exports = { getAllCategories, createCategory };
