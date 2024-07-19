import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import connectDB from './config/mongo'
import urlsRouter from './routes/urls'

const app = express()
const PORT = process.env.PORT || 3000

connectDB().then(() => console.log('DB connected...'))

app.use(cors())
app.use(morgan('tiny'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('Home'))

app.use('/urls', urlsRouter)

app.listen(PORT, () => console.log(`Running on port ${PORT}...`))
