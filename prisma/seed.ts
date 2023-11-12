import { PrismaClient } from "/home/eduardo/projects/struct/Trainee2023-2/repos/games/node_modules/@prisma/client";

const prisma = new PrismaClient();

async function seed() {
    // Create:
    await prisma.publisher.create({
        data: {
            name: "SquareEnix",
            catalog: {
                create: {}
            }
        }
    })
}

seed().then(() => {
    console.log("Seed realizada com sucesso")
})
