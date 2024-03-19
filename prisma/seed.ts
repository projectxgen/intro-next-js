import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.upsert({
        where: {
            username: 'winstencoellins'
        },
        update: {},
        create: {
            firstName: 'Winsten',
            lastName: 'Coellins',
            username: 'winstencoellins',
            password: 'complex123'
        }
    })

    console.log({user})
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })