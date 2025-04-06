import 'dotenv/config.js'
import express from 'express'
import router from './auth/auth.controller.js'
const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use('/api/auth', router)

app.listen(port, () => console.log(`app is working on port ${port}!`))
