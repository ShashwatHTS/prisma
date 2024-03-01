import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["info", "query"],
});

async function main() {
  const users = await prisma.user.findMany({
    where: {
      email: "shashawat@123",
    },
  });
  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      posts: true,
    },
  })
  console.log("users-------", users);
  console.log("user-------", user);
  // return user;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
