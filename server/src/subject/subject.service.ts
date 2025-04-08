import { PrismaClient } from '@prisma/client'
import { ISubjectCreateData } from 'src/types/types'

const prisma = new PrismaClient()

export class SubjectService {
	async getById(id: number) {
		return await prisma.subject.findMany({
			where: {
				userId: id,
			},
		})
	}

	async create(subjectCreateData: ISubjectCreateData) {
		return await prisma.subject.create({
			data: subjectCreateData,
		})
	}
}
