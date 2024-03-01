import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ["info","query",],});

async function main() {
  const post = prisma.post.create({
    data: {
      title: "Hello World",
      content: "aasdad",
     authorId:1
    },
  });
  return post;
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
