import express from 'express'
import aprendizRoutes from './routes/aprendiz.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',aprendizRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint No Encontrado'
    })
})

export default app