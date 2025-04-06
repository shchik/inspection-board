import * as argon from 'argon2'
import { Router } from 'express'
import { AuthService } from './auth.service.js'

const router = Router()

const authService = new AuthService()

router.post('/login', async (req, res) => {
	const userData = await authService.findByEmail(req.body.email)

	if (!userData) {
		res.status(403).send('Wrong email!')
		return
	}

	if (!(await argon.verify(userData.password, req.body.password))) {
		res.status(403).send('Wrong password!')
		return
	}

	const { password, ...user } = userData

	res.status(200).json(user)
})

router.post('/register', async (req, res) => {
	const userData = await authService.findByEmail(req.body.email)

	if (userData) res.status(403).send('User with this email already exists!')

	const hashedPassword = await argon.hash(req.body.password)
	const { password, ...user } = await authService.create({
		email: req.body.email,
		password: hashedPassword,
	})

	res.status(200).json(user)
})

export default router
