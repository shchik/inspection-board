import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
	await prisma.faculty.createMany({
		data: [
			{
				name: 'ФИТР',
				fullName: 'Факультет информационных технологий и робототехники',
				image: 'assets/faculty-images/fitr.jpg',
			},
			{
				name: 'ЭФ',
				fullName: 'Энергетический факультет',
				image: 'assets/faculty-images/ef.jpeg',
			},
			{
				name: 'СФ',
				fullName: 'Строительный факультут',
				image: 'assets/faculty-images/sf.jpg',
			},
			{
				name: 'ФТУГ',
				fullName: 'Факультет технологий управления и гуманитаризации',
				image: 'assets/faculty-images/ftug.jpg',
			},
			{
				name: 'ВТФ',
				fullName: 'Военно-технический факультет',
				image: 'assets/faculty-images/wtf.jpg',
			},
			{
				name: 'АТФ',
				fullName: 'Автотракторный факультет',
				image: 'assets/faculty-images/atf.jpg',
			},
		],
	})

	await prisma.speciality.createMany({
		data: [
			{
				name: 'ПОИТ',
				fullName: 'Программное обеспечение информационных технологий',
				recruitmentPlan: 30,
				facultyId: 1,
			},
			{
				name: 'ИСИТ',
				fullName: 'Информационные системы и технологии',
				recruitmentPlan: 33,
				facultyId: 1,
			},
			{
				name: 'РС',
				fullName: 'Робототехнические системы',
				recruitmentPlan: 26,
				facultyId: 1,
			},
			{
				name: 'ПОИТ',
				fullName: 'Программное обеспечение информационных технологий',
				recruitmentPlan: 30,
				facultyId: 2,
			},
			{
				name: 'ИСИТ',
				fullName: 'Информационные системы и технологии',
				recruitmentPlan: 33,
				facultyId: 2,
			},
			{
				name: 'РС',
				fullName: 'Робототехнические системы',
				recruitmentPlan: 26,
				facultyId: 2,
			},
			{
				name: 'ПОИТ',
				fullName: 'Программное обеспечение информационных технологий',
				recruitmentPlan: 30,
				facultyId: 3,
			},
			{
				name: 'ИСИТ',
				fullName: 'Информационные системы и технологии',
				recruitmentPlan: 33,
				facultyId: 3,
			},
			{
				name: 'РС',
				fullName: 'Робототехнические системы',
				recruitmentPlan: 26,
				facultyId: 3,
			},
			{
				name: 'ПОИТ',
				fullName: 'Программное обеспечение информационных технологий',
				recruitmentPlan: 30,
				facultyId: 4,
			},
			{
				name: 'ИСИТ',
				fullName: 'Информационные системы и технологии',
				recruitmentPlan: 33,
				facultyId: 4,
			},
			{
				name: 'РС',
				fullName: 'Робототехнические системы',
				recruitmentPlan: 26,
				facultyId: 4,
			},
			{
				name: 'ПОИТ',
				fullName: 'Программное обеспечение информационных технологий',
				recruitmentPlan: 30,
				facultyId: 5,
			},
			{
				name: 'ИСИТ',
				fullName: 'Информационные системы и технологии',
				recruitmentPlan: 33,
				facultyId: 5,
			},
			{
				name: 'РС',
				fullName: 'Робототехнические системы',
				recruitmentPlan: 26,
				facultyId: 5,
			},
			{
				name: 'ПОИТ',
				fullName: 'Программное обеспечение информационных технологий',
				recruitmentPlan: 30,
				facultyId: 6,
			},
			{
				name: 'ИСИТ',
				fullName: 'Информационные системы и технологии',
				recruitmentPlan: 33,
				facultyId: 6,
			},
			{
				name: 'РС',
				fullName: 'Робототехнические системы',
				recruitmentPlan: 26,
				facultyId: 6,
			},
		],
	})
}

main().then(async () => await prisma.$disconnect())
