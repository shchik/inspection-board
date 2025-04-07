import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class FacultyService {
	async getAllFaculties() {
		return await prisma.faculty.findMany()
	}
}
