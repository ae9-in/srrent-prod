import express from 'express'
import cors from 'cors'
import env from './config/env.js'
import { getHealth } from './controllers/healthController.js'
import contactRoutes from './routes/contact.js'
import productRoutes from './routes/products.js'
import { errorHandler } from './middleware/errorHandler.js'
import { notFound } from './middleware/notFound.js'

const app = express()

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || env.CLIENT_URLS.includes(origin)) {
        return callback(null, true)
      }

      return callback(new Error(`CORS blocked for origin: ${origin}`))
    },
    credentials: true,
  }),
)

app.use(express.json({ limit: '1mb' }))

app.get('/api/health', getHealth)
app.use('/api/contact', contactRoutes)
app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

export default app
