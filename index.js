import 'dotenv/config'
import express from 'express'
import estudiantesRouter from './routes/estudiantes.route.js'

const app = express()

// habilitar req.body
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//routes
app.use('/estudiantes', estudiantesRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log (`servidor andando..`))