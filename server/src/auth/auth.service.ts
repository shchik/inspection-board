import { PrismaClient } from '@prisma/client'
import { IRegisterData } from 'src/types/types'

const prisma = new PrismaClient()

export class AuthService {
	async findByEmail(email: string) {
		return await prisma.user.findUnique({
			where: {
				email: email,
			},
		})
	}

	async create(registerData: IRegisterData) {
		return await prisma.user.create({
			data: registerData,
		})
	}
}
