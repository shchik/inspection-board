import { z } from 'zod'

export const createUserDto = z.object({
	email: z.string().email().min(3).max(25),
	password: z.string().min(3, 'Min password lenght is 3!').max(15),
})
