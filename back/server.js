import express from 'express'
import cors from 'cors'
import taskRouter from './router/task.js'
import db from './bdd/connect.js'

db.connect()
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/v1/task', taskRouter)

app.listen(5000)
