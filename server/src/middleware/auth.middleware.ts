import 'dotenv/config.js'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const authMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const accessToken = req.signedCookies.access_token
	if (!accessToken) {
		res.status(401).json({ message: 'No token provided!' })
		return
	}

	try {
		const decoded = jwt.verify(accessToken, process.env.TOKEN_SECRET!)
		if (typeof decoded === 'string') throw new Error()
		const user = Object.assign({}, decoded)
		res.locals.user = user
		next()
	} catch (err) {
		res.clearCookie('access_token')
		res.status(401).json({ message: 'Wrong access_token!' })
		return
	}
}
