import cookieParser from 'cookie-parser'
import 'dotenv/config.js'
import express from 'express'
import authRouter from './auth/auth.controller.js'
import facultyRouter from './faculty/faculty.controller.js'
import specialityRouter from './speciality/speciality.controller.js'
import subjectRouter from './subject/subject.controller.js'
const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SECRET))

app.use('/api/auth', authRouter)
app.use('/api/faculty', facultyRouter)
app.use('/api/speciality', specialityRouter)
app.use('/api/subject', subjectRouter)

app.listen(port, () => console.log(`app is working on port ${port}!`))
