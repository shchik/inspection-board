import { z } from 'zod'

export const createSubjectDto = z.object({
	name: z.string().min(1, 'Text is required!').max(20),
	points: z.number().min(0).max(100),
})
