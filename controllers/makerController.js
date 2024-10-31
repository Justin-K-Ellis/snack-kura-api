const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// GET
async function getAllMakers(req, res) {
  try {
    const makers = await prisma.maker.findMany();
    res.json(makers);
  } catch (error) {
    res.status(500).json(error);
  }
}

// POST
async function postMaker(req, res) {
  const { name } = req.body;
  try {
    const maker = await prisma.maker.create({
      data: {
        name,
      },
    });
    res.json(maker);
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong (failed to create maker): ${error}`,
    });
  }
}

// PUT
async function updateMaker(req, res) {
  res.json("Coming soon");
}

// DELETE

async function deleteMaker(req, res) {
  const { makerId } = req.body;
  try {
    const deletedMaker = await prisma.maker.delete({
      where: {
        id: makerId,
      },
    });
    res.json(deletedMaker);
  } catch (error) {
    res.status(500).json(`Failed to delete maker: ${error}`);
  }
}

module.exports = { getAllMakers, postMaker, updateMaker, deleteMaker };
