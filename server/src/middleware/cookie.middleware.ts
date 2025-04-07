import 'dotenv/config'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const cookieMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const accessToken = req.cookies.access_token
	if (!accessToken)
		return res.status(401).json({ message: 'No token provided!' })

	try {
		const user = jwt.verify(accessToken, process.env.MY_SECRET!)
		req.body.user = user
		next()
	} catch (err) {
		res.clearCookie('access_token')
		return res.status(401).json({ message: 'Wrong access_token!' })
	}

	next()
}
