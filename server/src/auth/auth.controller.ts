import * as argon from 'argon2'
import 'dotenv/config.js'
import { Request, Response, Router } from 'express'
import jwt from 'jsonwebtoken'
import { createUserDto } from './auth.dto.js'
import { AuthService } from './auth.service.js'

const router = Router()

const authService = new AuthService()

router.post('/login', async (req: Request, res: Response) => {
	const userData = await authService.findByEmail(req.body.email)

	if (!userData) {
		res.status(403).json({ message: 'Wrong email!' })
		return
	}

	if (!(await argon.verify(userData.password, req.body.password))) {
		res.status(403).json({ message: 'Wrong password!' })
		return
	}
	const access_token = jwt.sign(
		{ id: userData.id },
		process.env.TOKEN_SECRET!,
		{
			expiresIn: '1h',
		}
	)

	res.cookie('access_token', access_token, {
		httpOnly: true,
		maxAge: 3600000,
		sameSite: 'lax',
		signed: true,
	})

	res.status(200).json({ access_token })
})

router.post('/register', async (req: Request, res: Response) => {
	const validation = await createUserDto.safeParseAsync(req.body)
	if (!validation.success) {
		res.status(403).json(validation.error.errors[0].message)
		return
	}

	const userData = await authService.findByEmail(req.body.email)

	if (userData)
		res.status(403).json({
			message: 'User with this email already exists!',
		})

	const hashedPassword = await argon.hash(req.body.password)
	const user = await authService.create({
		email: req.body.email,
		password: hashedPassword,
	})

	const access_token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET!, {
		expiresIn: '1h',
	})

	res.cookie('access_token', access_token, {
		httpOnly: true,
		maxAge: 3600000,
		sameSite: 'lax',
		signed: true,
	})

	res.status(200).json({ access_token })
})

export default router
