import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["info","query",],});

async function main() {
    const user = await prisma.user.create({
        data:{
            name:"shashwat",
            email:"shashawat@123",
            posts:{
                create:{
                    title:"Hello World",
                }
            }
        }
    })
    return user;
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
