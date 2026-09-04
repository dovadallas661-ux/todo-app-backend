import express from 'express'
import cors from 'cors'
import taskRouter from './routes/taskRoutes.js'
import userRouter from './routes/userRoutes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/api/v1/tasks', taskRouter)
app.use('/api/v1/users', userRouter)

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`)
})
