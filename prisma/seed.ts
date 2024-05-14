const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const types = [{ name: "Administrador" }, { name: "Participante" }];

async function seed() {
  try {
    await db.typeUser.deleteMany();

    for (const type of types) {
      await db.typeUser.create({
        data: {
          name: type.name,
        },
      });
    }

    console.log("Seed concluído com sucesso!");
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
}

seed();
