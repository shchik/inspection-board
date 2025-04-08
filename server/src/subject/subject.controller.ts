import { Request, Response, Router } from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js'
import { createSubjectDto } from './subject.dto.js'
import { SubjectService } from './subject.service.js'

const router = Router()
const subjectService = new SubjectService()

router.get('/get', authMiddleware, async (req: Request, res: Response) => {
	const userId: number = res.locals.user.id
	if (!userId) {
		res.status(401).json({ message: "You're not authorized!" })
		return
	}

	const subjects = await subjectService.getById(userId)

	if (!subjects) {
		res.status(500).json({ message: 'No subjects on server for you!' })
		return
	}

	res.status(200).json(subjects)
})

router.post('/create', authMiddleware, async (req: Request, res: Response) => {
	const { name, points } = req.body
	const validation = await createSubjectDto.safeParseAsync({ name, points })

	if (!validation.success) {
		res.status(400).json({ message: validation.error.errors })
		return
	}

	const userId: number = res.locals.user.id
	if (!userId) {
		res.status(401).json({ message: "You're not authorized!" })
		return
	}

	const subject = await subjectService.create({ name, points, userId })
	if (!subject) {
		res.status(500).json({ message: 'Cant create subject' })
		return
	}
	res.status(200).json(subject)
})

export default router
