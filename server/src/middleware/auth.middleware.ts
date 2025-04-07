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
		const user = jwt.verify(accessToken, process.env.TOKEN_SECRET!)
		next()
	} catch (err) {
		res.clearCookie('access_token')
		res.status(401).json({ message: 'Wrong access_token!' })
		return
	}
}
