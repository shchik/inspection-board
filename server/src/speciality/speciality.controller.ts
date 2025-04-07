import { Request, Response, Router } from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js'
import { SpecialityService } from './speciality.service.js'

const router = Router()
const specialityService = new SpecialityService()

router.get('/get', authMiddleware, async (req: Request, res: Response) => {
	const { faculty_id } = req.body

	if (!faculty_id) {
		res.status(500).json({ message: 'No faculty id provided!' })
		return
	}
	const specialities = await specialityService.getById(faculty_id)
	if (!specialities) {
		res.status(500).json({ message: 'No specialities on server!' })
		return
	}

	res.status(200).json(specialities)
})

export default router
