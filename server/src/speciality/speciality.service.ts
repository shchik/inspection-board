import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class SpecialityService {
	async getById(id: number) {
		return await prisma.speciality.findMany({
			where: {
				facultyId: id,
			},
		})
	}
}
