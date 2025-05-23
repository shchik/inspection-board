import { Request, Response, Router } from 'express'
import { FacultyService } from './faculty.service.js'

const router = Router()
const facultyService = new FacultyService()

router.get('/get', async (req: Request, res: Response) => {
	const faculties = await facultyService.getAllFaculties()
	if (!faculties)
		res.status(500).json({ message: 'Server error with faculties!!' })

	res.status(200).json(faculties)
})

export default router
