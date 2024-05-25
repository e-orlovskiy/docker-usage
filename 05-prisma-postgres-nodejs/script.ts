import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// const prisma = new PrismaClient({ log: ['query'] })

async function main() {
	await prisma.user.deleteMany()

	// create user
	const user1 = await prisma.user.create({
		data: {
			name: 'Ivan',
			email: 'Ivan@example.com',
			age: 20,
			// можно изменять references
			userPreference: {
				create: {
					emailUpdates: true
				}
			}
		}
	})

	// get users
	const user2 = await prisma.user.findMany({
		where: {
			age: 20
		}
	})

	// позволяет включить сюда userPreference
	// include: {
	// 	userPreference: true
	// }
	// позволяет включить в ответ только определенные поля
	// нельзя делать одновременно select и include
	// select: {
	// 	userPreference: { select: { id: true } },
	// 	name: true
	// }
	// })

	console.log(user1)
	console.log(user2)
}

main()
	.catch(e => {
		throw e
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
